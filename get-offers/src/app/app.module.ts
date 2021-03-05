import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { GroupsComponent } from './groups/groups.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from './material/material.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ButtonGetdataComponent } from './button-getdata/button-getdata.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    GroupsComponent,
    TableComponent,
    ItemsListComponent,
    ButtonGetdataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
