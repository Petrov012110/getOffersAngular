import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthFirebaseService } from "./auth-firebase.service";

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor(
        private _router: Router,
        private _authFb: AuthFirebaseService
    ) { }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authFb.isLoggedIn !== true) {
            this._router.navigate(['/user', 'sign-in']);
            return false;
        }
        return true;
    }

}