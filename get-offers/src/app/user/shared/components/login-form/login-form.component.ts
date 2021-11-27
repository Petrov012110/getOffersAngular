import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user/user.model';
import { AuthFirebaseService } from '../../services/auth-firebase.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./styles/login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public loginForm!: FormGroup;
    public submitted = false;

    constructor(
        public authFb: AuthFirebaseService,
        private _auth: AuthService,
        private _router: Router,
    ) {
        this.createForm();
    }

    public ngOnInit(): void {
    }

    public createForm(): void {
            this.loginForm = new FormGroup({
                emailControl: new FormControl(null, [Validators.required, Validators.email]),
                passwordControl: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            });
        
    }



    public async submit(email: string, password: string): Promise<void> {
        if (this.loginForm.invalid) {
            return;
        }
        
        this.submitted = true;
        
        await this.login(email, password);
        this.loginForm.reset();
        this._router.navigate(['/user', 'search']);


        setTimeout(() => {
            this.submitted = false;
        }, 4000);
    }

    public async login(email: string, password: string) {
        await this.authFb.checkEmailVerification();
        await this.authFb.SignIn(email, password)
    }

}
