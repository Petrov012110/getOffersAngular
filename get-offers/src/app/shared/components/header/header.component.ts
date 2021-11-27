import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/user/shared/services/auth-firebase.service';
import { AuthService } from 'src/app/user/shared/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent implements OnInit {

    public authFlag: boolean = false;
    
    constructor(
        public authFb: AuthFirebaseService,
        ) { }

    public ngOnInit(): void {
    }

    public logout(event: Event): void {
        event.preventDefault();
        this.authFb.SignOut();

    }

}
