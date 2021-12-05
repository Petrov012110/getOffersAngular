import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ParseDataViewModel } from "../models/parse-data/parse-data.view-model";


@Injectable()
export class ManagerService {

    public treeData$: Subject<any> = new Subject<any>();
    public responseData$: BehaviorSubject<ParseDataViewModel[]> = new BehaviorSubject<ParseDataViewModel[]>([]);
    public isLogin$: Subject<boolean> = new Subject<boolean>();


}