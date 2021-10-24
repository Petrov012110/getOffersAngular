import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) { }

    public ngOnInit(): void {
    }

    public logout(event: Event): void {
        event.preventDefault();

        this._router.navigate(['/user', 'login']);
    }

}
