import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseDataViewModel } from '../shared/models/parse-data/parse-data.view-model';

@Component({
    selector: 'app-item-page',
    templateUrl: './item-page.component.html',
    styleUrls: ['./styles/item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

    public element!: ParseDataViewModel;

    constructor(private _route: Router) {
        const navigation = this._route.getCurrentNavigation();
        if (navigation && navigation.extras?.state) {
            this.element = navigation.extras?.state as ParseDataViewModel;
        }

    }


    ngOnInit(): void {
    }

}
