import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassificatorViewModel } from '../shared/models/classificator/classificator.view-model';
import { ParseDataViewModel } from '../shared/models/parse-data/parse-data.view-model';
import { CacheKeys, CacheService } from '../shared/services/cache.service';
import { ManagerService } from '../shared/services/manager.service';
import { SourceService } from '../shared/services/source.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./styles/search-page.component.scss']
})
export class SearchPageComponent {

    constructor(
        private _cache: CacheService,
        private _managerSub: ManagerService
        ) { 

        }

    public startSearch(): void {
        this._cache.getDataCache(CacheKeys.ParseData)
            .subscribe(response => this._managerSub.responseData$.next(response));
    }
}
