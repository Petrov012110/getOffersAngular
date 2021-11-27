import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SourceService } from "./source.service";

const key = 'CACHE_KEY';

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

    public getDataClassificator(): Observable<any> {

        if (!this._instanceCache$.has(key)) {
            const response = this._source.getClassificator();
            this._instanceCache$.set(key, response);
        }

        return this._instanceCache$.get(key) as Observable<any>;
    }

    // public getDataParse(): Observable<any> {

    // }
}