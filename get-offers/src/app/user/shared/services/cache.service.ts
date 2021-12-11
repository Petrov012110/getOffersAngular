import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ClassificatorViewModel } from "../models/classificator/classificator.view-model";
import { SourceService } from "./source.service";



export enum CacheKeys {
    Classificator = 'CACHE_KEY_CLASSIFICATOR',
    ParseData = 'CACHE_KEY_PARSEDATA'
}
@Injectable()
export class CacheService implements OnDestroy {

    private _unsubscriber$: Subject<void> = new Subject<void>();
    private _instanceCache$ = new Map<string, Observable<any>>();
    

    constructor(private _source: SourceService) {

    }

    public ngOnDestroy(): void {
        this._unsubscriber$.next();
        this._unsubscriber$.complete();
    }


    public getDataCache(keyCache: CacheKeys): Observable<any> {
        if (!this._instanceCache$.has(keyCache)) {
            if (keyCache === CacheKeys.Classificator) {
                this._instanceCache$.set(keyCache, this._source.getClassificator());
            } else if (keyCache === CacheKeys.ParseData) {
                this._instanceCache$.set(keyCache, this._source.getParseData());
            }
        }

        return this._instanceCache$.get(keyCache) as Observable<any>;
    }
}