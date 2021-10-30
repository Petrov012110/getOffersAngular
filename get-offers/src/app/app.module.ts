import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';


const imports: any[] = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    UserModule
];

const declarations: any[] = [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    HeaderComponent,
];

@NgModule({
  declarations: [
    ...declarations    
  ],
  imports: [
    ...imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
