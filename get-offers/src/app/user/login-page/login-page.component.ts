import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./styles/login-page.component.scss']
})
export class LoginPageComponent {

    public flagForm = true;

    constructor() { }

    public changeForm(): void {
        this.flagForm = !this.flagForm;   
    }

}
