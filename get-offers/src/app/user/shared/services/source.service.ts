import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map, publishReplay, refCount, takeUntil } from "rxjs/operators";
import { ClassificatorViewModel } from "../models/classificator/classificator.view-model";
import { IClassificator } from "../models/classificator/classificator.response-model.interface";

const CACHE_SIZE = 1;

@Injectable()
export class SourceService implements OnDestroy {

    private _unsubscriber$: Subject<void> = new Subject<void>();

    constructor(private _http: HttpClient) {

    }

    public ngOnDestroy(): void {
        this._unsubscriber$.next();
        this._unsubscriber$.complete();
    }

    public getParseData(): Observable<any> {

        return this._http.post<any>(`http://localhost:808/api/get_data`, {"groups": [1, 1, 1],"items": [1, 1, 1]})
    }

    public getClassificator(): Observable<ClassificatorViewModel> {
        return this._http.get<Array<IClassificator>>(`http://localhost:808/api/classificator`)
            .pipe(
                map((response: Array<IClassificator>) => new ClassificatorViewModel(response)),
                publishReplay(1),
                refCount(),
                takeUntil(this._unsubscriber$)
            )
    }

}