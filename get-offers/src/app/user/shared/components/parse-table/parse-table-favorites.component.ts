import { Component, OnInit } from "@angular/core";
import { ParseDataViewModel } from "../../models/parse-data/parse-data.view-model";
import { LocalStorageService } from "../../services/local-storage.service";
import { ParseTableBaseComponent } from "./parse-table.base.component";

@Component({
    selector: 'app-parse-table-favorites',
    templateUrl: './parse-table-favorites.component.html',
    styleUrls: ['./styles/parse-table.component.scss']
})
export class ParseTableFavoritesComponent extends ParseTableBaseComponent implements OnInit {

    constructor(protected localStorage: LocalStorageService) {
        super(localStorage);
        this.displayedColumns.push('delete')
    }

    public ngOnInit(): void {
        this.localStorage.getItems()
            .subscribe(items => {
                this.dataSource.data = items;
            });
    }

}