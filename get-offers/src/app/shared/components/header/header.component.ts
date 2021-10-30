import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/shared/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private _router: Router,
        private _auth: AuthService
        ) { }

    public ngOnInit(): void {
    }

    public logout(event: Event): void {
        event.preventDefault();
        this._auth.logout();
        this._router.navigate(['/user', 'login']);
    }

}
