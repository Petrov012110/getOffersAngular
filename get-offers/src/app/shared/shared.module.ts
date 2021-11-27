import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
    imports: [
        HttpClientModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        HttpClientModule,
        MatToolbarModule,
        MatIconModule
    ],
    providers: [
        GlobalErrorHandlerService,
        { provide: ErrorHandler, useExisting: GlobalErrorHandlerService }
    ],
    declarations: [

    ]
})
export class SharedModule {

}