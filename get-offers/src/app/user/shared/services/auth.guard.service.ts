import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthFirebaseService } from "./auth-firebase.service";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor(
        private _auth: AuthService,
        private _router: Router,
        private _authFb: AuthFirebaseService
    ) { }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authFb.isLoggedIn !== true) {
            this._router.navigate(['/user', 'login']);
            return false;
        }
        return true;
    }

    // public canActivate(
    //         route: ActivatedRouteSnapshot,
    //         state: RouterStateSnapshot
    //     ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     if (this._authFb.isLoggedIn) {
    //         return true;
    //     } else {
    //         this._auth.logout();
    //         this._router.navigate(['/user', 'login'], {
    //             queryParams: {
    //                 loginAgain: true
    //             }
    //         });
    //         return false;
    //     }
    // }

}