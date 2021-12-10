import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ManagerService } from "./manager.service";

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

@Injectable()

export class AuthFirebaseService {
    userData: any; // Save logged in user data

    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone, // NgZone service to remove outside scope warning
        private _managerSub: ManagerService
    ) {
        /* Saving user data in localstorage when 
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                this._managerSub.isLogin$.next(true);
                // JSON.parse(localStorage.getItem('user') as string);
                this.router.navigate(['/user', 'search']);

            } else {
                this._managerSub.isLogin$.next(false);
                localStorage.removeItem('user');
                // JSON.parse(localStorage.getItem('user') as string);
            }
        })
    }

    // Sign in with email/password
    public SignIn(email: string, password: string): Promise<void> {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result: any) => {
                this.SetUserData(result.user);
                
            }).catch((error) => {
                window.alert(error.message)
            })
    }

    public async checkEmailVerification(): Promise<void> {
        let user = await this.afAuth.currentUser;
        await user?.reload();
        if (user?.emailVerified) {
            const userNotVeryfiedEmail = JSON.parse(localStorage.getItem('user') as string);
            userNotVeryfiedEmail.emailVerified = true;
            localStorage.setItem('user', JSON.stringify(userNotVeryfiedEmail));
        }
    }    

    // Sign up with email/password
    public SignUp(email: string, password: string): Promise<void> {
        const userRealMail = email;
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result: any) => {
                /* Call the SendVerificaitonMail() function when new user sign 
                up and returns promise */
                this.SendVerificationMail();
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error.message)
            })
    }

    // Send email verfificaiton when new user sign up
    public SendVerificationMail(): Promise<void> {
        return this.afAuth.currentUser
            .then(u => u?.sendEmailVerification())
            .then(() => {
                // this.router.navigate(['verify-email']);
                alert("Отправили mail");
            })
    }

    // Reset Forggot password
    public ForgotPassword(passwordResetEmail: string): Promise<void> {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            }).catch((error) => {
                window.alert(error);
            })
    }

    // Returns true when user is looged in and email is verified
    public get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user') as string);
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    // Sign in with Google
    // GoogleAuth() {
    //     return this.AuthLogin(new auth.GoogleAuthProvider());
    // }

    // Auth logic to run auth providers
    public AuthLogin(provider: any): Promise<void> {
        return this.afAuth.signInWithPopup(provider)
            .then((result: any) => {
                this.ngZone.run(() => {
                    this.router.navigate(['/user', 'search']);
                })
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error);
            })
    }

    /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    public SetUserData(user: User): Promise<void> {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    // Sign out 
    public SignOut(): Promise<void> {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/user', 'sign-in']);
        })
    }
}