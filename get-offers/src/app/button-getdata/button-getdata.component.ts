import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-button-getdata',
  templateUrl: './button-getdata.component.html',
  styleUrls: ['./button-getdata.component.scss']
})
export class ButtonGetdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get() {

  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw = JSON.stringify({ "groups": [1, 1, 1], "items": [1, 1, 1] });
  //   let requestOptions: RequestInit = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   const request: RequestInfo = new Request("http://localhost:808/api/classificator");

  //   fetch(request)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // }



}
