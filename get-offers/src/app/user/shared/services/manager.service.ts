import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class ManagerService {

    public treeData$: Subject<any> = new Subject<any>();


}