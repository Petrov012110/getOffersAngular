import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ManagerService } from './user/shared/services/manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.scss']
})
export class AppComponent implements OnInit {

    public isLoginFlag!: boolean;

    constructor(private _managerSub: ManagerService) {

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
