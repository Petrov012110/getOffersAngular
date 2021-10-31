import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { UserModel } from "../models/user/user.model";
import { map, takeUntil, tap } from "rxjs/operators";
import { IFbAuthResponse as IFbAuthResponse } from "../models/fire-base/fire-base.response-model.interface";
import { FbAuthResponseModel } from "../models/fire-base/firebase-auth.response-model";
import { FbRegistrationResponse } from "../models/fire-base/firebase-registration.response-model";
import { IFbRegistrationResponse } from "../models/fire-base/fire-base.response-registration-model.interface";

@Injectable()
export class AuthService implements OnInit, OnDestroy {

    private _unsubscriber: Subject<void> = new Subject<void>();

    constructor(
        private _http: HttpClient,
    ) {

    }

    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }

    public get token(): string | null {
        const expDate = new Date(localStorage.getItem('fb-token-expdate') as string);

        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token')
    }

    public login(user: UserModel): Observable<any> {
        user.returnSecureToken = true;
        return this._http.post<IFbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`, user)
            .pipe(
                map((response: IFbAuthResponse) => new FbAuthResponseModel(response)),
                tap(this.setToken),
                takeUntil(this._unsubscriber)
            )
    }

    public registration(user: UserModel): Observable<any> {
        user.returnSecureToken = true;
        return this._http.post<IFbRegistrationResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`, user)
            .pipe(
                map((response: IFbRegistrationResponse) => new FbRegistrationResponse(response)),
                tap(this.setToken),
                takeUntil(this._unsubscriber)
            )

    }

    public logout(): void {
        this.setToken(null);
    }

    public isAuthenticated(): boolean {
        return !!this.token;
    }

    private setToken(response: FbAuthResponseModel | FbRegistrationResponse | null): void {
        if (response) {
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-expdate', response.expiresIn.toString());
        } else {
            localStorage.clear();
        }
    }
}