import { Component, OnInit } from '@angular/core';
import { IGroup } from '../shared/models/group/group.response-model.interface';
import { CacheKeys, CacheService } from '../shared/services/cache.service';
import { ManagerService } from '../shared/services/manager.service';


@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./styles/search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

    public groupsList: IGroup[] = []

    constructor(
        private _cache: CacheService,
        private _managerSub: ManagerService
    ) {


    }

    public ngOnInit(): void {

        this.groupsList = [
            {
                name: 'themarket',
                img: 'https://sun3-9.userapi.com/s/v1/if1/B8tawvBnfcdwCFowa-4FvVW7AEb4a6iK8T0ay3HcgxdS6jzrMCHtaTuyYbhaUSe3KU1koJom.jpg?size=50x50&quality=96&crop=0,0,2160,2160&ava=1'
            },
            {
                name: 'shmotki',
                img: 'https://sun3-10.userapi.com/s/v1/if1/QqJYjQuBzq1ocddHX6Ab6YpsLf04NCgxiunob1MLp8vsm0GxIJFWxNBaHOPltvLbfdLtiYDi.jpg?size=50x50&quality=96&crop=100,0,1820,1820&ava=1'
            },
            {
                name: 'shmotki',
                img: 'https://sun3-10.userapi.com/s/v1/if1/QqJYjQuBzq1ocddHX6Ab6YpsLf04NCgxiunob1MLp8vsm0GxIJFWxNBaHOPltvLbfdLtiYDi.jpg?size=50x50&quality=96&crop=100,0,1820,1820&ava=1'
            }
        ];

    }

    public startSearch(): void {
        this._cache.getDataCache(CacheKeys.ParseData)
            .subscribe(response => this._managerSub.responseData$.next(response));
    }
}
