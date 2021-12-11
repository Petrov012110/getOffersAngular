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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ManagerService } from './user/shared/services/manager.service';


const imports: any[] = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    UserModule.forRoot()
];

const declarations: any[] = [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent
];

@NgModule({
  declarations: [
    ...declarations    
  ],
  imports: [
    ...imports
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
