import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/user/shared/services/auth-firebase.service';
import { AuthService } from 'src/app/user/shared/services/auth.service';
import { ManagerService } from 'src/app/user/shared/services/manager.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input()
    public authFlag: boolean = false;
    
    constructor(private _authFb: AuthFirebaseService, private _managerSub: ManagerService) { 
    }
    
    public ngOnInit(): void {
        // this._managerSub.isLogin$.subscribe(value => this.authFlag = value);
        this.authFlag = this.authFlag;
    }

    public logout(event: Event): void {
        event.preventDefault();
        this._authFb.SignOut();

    }

}
