import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor (
        private _auth: AuthService,
        private _router: Router,
        ) { }

    public canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this._auth.isAuthenticated()) {
            return true;
        } else {
            this._auth.logout();
            this._router.navigate(['/user', 'login'], {
                queryParams: {
                    loginAgain: true
                }
            });
            return false;
        }
    }

}