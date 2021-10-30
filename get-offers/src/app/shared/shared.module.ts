import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        HttpClientModule
    ],
    providers: [
        GlobalErrorHandlerService,
        { provide: ErrorHandler, useExisting: GlobalErrorHandlerService }
    ]
})
export class SharedModule {

}