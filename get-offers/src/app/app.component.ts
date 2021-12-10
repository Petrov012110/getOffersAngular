import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthFirebaseService } from './user/shared/services/auth-firebase.service';
import { ManagerService } from './user/shared/services/manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.scss']
})
export class AppComponent implements OnInit {

    public isLoginFlag!: boolean;

    constructor(
        private _auth: AuthFirebaseService,
        private _manager: ManagerService,
    ) {
        this.isLoginFlag = this._auth.isLoggedIn;
        this._manager.isLogin$.subscribe((isLogin) => {
            this.isLoginFlag = isLogin;
        })
    }

    ngOnInit(): void {
        // console.log(this.getAuthFlag());
        // this.isLoginFlag = this.getAuthFlag()
        // this._managerSub.isLogin$.next(this.getAuthFlag());
    }

    // public getAuthFlag(): boolean {
    //     const user = JSON.parse(localStorage.getItem('user') as string);
    //     return ((user !== null && user.emailVerified !== false) ? true : false);

    // }


}
