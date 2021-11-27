import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user/user.model';
import { AuthFirebaseService } from '../../services/auth-firebase.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./styles/registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

    public registrationForm!: FormGroup;
    public submitted = false;

    constructor(
        private _authFb: AuthFirebaseService,
        private _auth: AuthService,
        private _router: Router,
    ) {
    }

    public ngOnInit(): void {
        this.createForm();
    }

    public createForm(): void {
        this.registrationForm = new FormGroup({
            emailControl: new FormControl(null, [Validators.required, Validators.email]),
            passwordControl: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            confirmPasswordControl: new FormControl(null, [Validators.required, Validators.minLength(6)])
        },
            { validators: this.checkPasswords });
    }

    public checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        let pass = group.get('passwordControl')?.value;
        let confirmPass = group.get('confirmPasswordControl')?.value;
        return pass === confirmPass ? null : { notSame: true }
    }

    public submit(email: string, password: string): void {

        if (this.registrationForm.invalid) {
            return;
        }

        this.submitted = true;

        this._authFb.SignUp(email, password);

        this.registrationForm.reset();
        this._router.navigate(['/user', 'sign-in']);


        setTimeout(() => {
            this.submitted = false;
        }, 4000);
    }

}
