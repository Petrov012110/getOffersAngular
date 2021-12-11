import { Component, Input, OnInit } from '@angular/core';
import { IGroup } from '../../models/group/group.response-model.interface';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./styles/groups.component.scss']
})
export class GroupsComponent implements OnInit {

    @Input()
    public group!: IGroup;

    constructor() { }

    ngOnInit(): void {
        
    }

    public getGroup(group: IGroup): void {
        console.log(group);
        
    }

}
