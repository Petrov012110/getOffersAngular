import { Component, OnInit, Output } from '@angular/core';
import { AuthFirebaseService } from '../shared/services/auth-firebase.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./styles/login-page.component.scss']
})
export class LoginPageComponent {

    public flagForm = true;

    constructor(
        private _authFb: AuthFirebaseService
    ) { }

    public changeForm(): void {
        this.flagForm = !this.flagForm;   
    }

}
