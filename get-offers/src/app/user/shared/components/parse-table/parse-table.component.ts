import { Component, OnInit } from '@angular/core';
import { ParseDataViewModel } from '../../models/parse-data/parse-data.view-model';
import { LocalStorageService } from '../../services/local-storage.service';
import { ManagerService } from '../../services/manager.service';
import { ParseTableBaseComponent } from './parse-table.base.component';

@Component({
    selector: 'app-parse-table',
    templateUrl: './parse-table.component.html',
    styleUrls: ['./styles/parse-table.component.scss']
})
export class ParseTableComponent extends ParseTableBaseComponent implements OnInit {

    public isData: boolean = false;
    // public bookmark: string = 'bookmark_border';
    private cache: Map<string, ParseDataViewModel[]> = new Map();

    constructor(
        protected localStorage: LocalStorageService,
        private _managerSub: ManagerService
    ) {
        super(localStorage);
        this.displayedColumns.push('favorites');
    }

    public ngOnInit(): void {

        this._managerSub.responseData$
            .subscribe(data => {
                if (data) {
                    this.isData = true;
                    this.dataSource.data = data;

                }
            });
    }

}
