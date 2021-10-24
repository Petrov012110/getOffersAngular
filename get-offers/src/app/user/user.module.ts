import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from "./login-page/login-page.component";
import { SearchPageComponent } from './search-page/search-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { FavoritesItemPageComponent } from './favorites-item-page/favorites-item-page.component';
import { UserLayoutComponent } from "./shared/components/user-layout/user-layout.component";
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "../shared/shared.module";
import { LocalStorageService } from "./shared/services/local-storage.service";

const imports: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
        {
            path: '', component: UserLayoutComponent, children: [
                {
                    path: '', redirectTo: '/user/login', pathMatch: 'full'
                },
                {
                    path: 'login', component: LoginPageComponent
                },
                {
                    path: 'item/:id', component: ItemPageComponent
                },
                {
                    path: 'search', component: SearchPageComponent
                },
                {
                    path: 'favorites-item', component: FavoritesItemPageComponent
                }
            ]
        }
    ])
];

const declarations: any[] = [
    UserLayoutComponent,
    LoginPageComponent,
    SearchPageComponent,
    ItemPageComponent,
    FavoritesItemPageComponent,
    LoginFormComponent
];

const exports: any[] = [
    RouterModule
];

const providers: any[] = [
    AuthService,
    LocalStorageService
];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        ...imports
    ],
    providers: [
        ...providers
    ],
    exports: [
        ...exports
    ],
})

export class UserModule {

}