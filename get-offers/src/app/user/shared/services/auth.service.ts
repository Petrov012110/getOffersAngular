import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { UserModel } from "../models/user/user.model";
import { takeUntil, tap } from "rxjs/operators";
import { IFbAuthResponse as IFbAuthResponse } from "../models/fire-base/fire-base.response-model.interface";

@Injectable()
export class AuthService implements OnInit, OnDestroy {

    private _unsubscriber: Subject<void> = new Subject<void>();

    constructor(private _http: HttpClient) {

    }

    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }

    public get token(): string {
        return '';
    }

    public login(user: UserModel): Observable<any> {
        user.returnSecureToken = true;
        return this._http.post<IFbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
            .pipe(
                tap(this.setToken),
                takeUntil(this._unsubscriber)
            )
    }

    public logout(): void {

    }

    public isAuthenticated(): boolean {
        return !!this.token;
    }

    private setToken(response: IFbAuthResponse): void {
        console.log(response);
        const expDate = new Date(new Date().getDate() + +response.expiresIn * 1000)
        
    }
}