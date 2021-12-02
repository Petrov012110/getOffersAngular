import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ParseDataViewModel } from "../models/parse-data/parse-data.view-model";


@Injectable()
export class ManagerService {

    public treeData$: Subject<any> = new Subject<any>();
    public responseData$: Subject<ParseDataViewModel[]> = new Subject<ParseDataViewModel[]>();


}