import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../services/auth-firebase.service';

@Component({
    selector: 'app-reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./styles/reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

    constructor(private _authFb: AuthFirebaseService) { }

    ngOnInit(): void {
    }

    public resetPwd(password: string): void {
        this._authFb.ForgotPassword(password);
    }

}
