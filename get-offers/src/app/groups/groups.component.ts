import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{

  typesOfShoes: string[] = [];

  constructor(private _httpClient: HttpClient) {

  }

  public ngOnInit() {
    this._httpClient.get('http://localhost:808/api/groups').subscribe(vl => {
      console.log(vl);
      // @ts-ignore
      vl.forEach(el => this.typesOfShoes.push(el.name) );
    })
  }



}
