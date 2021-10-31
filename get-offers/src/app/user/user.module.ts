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
import { AuthGuardService } from "./shared/services/auth.guard.service";
import { RegistrationFormComponent } from './shared/components/registration-form/registration-form.component';
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { list } from '@angular/fire/database';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

const imports: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
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
                    path: 'item/:id', component: ItemPageComponent, canActivate: [AuthGuardService]
                },
                {
                    path: 'search', component: SearchPageComponent, canActivate: [AuthGuardService]
                },
                {
                    path: 'favorites-item', component: FavoritesItemPageComponent, canActivate: [AuthGuardService]
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
    LocalStorageService,
    AuthGuardService
];

@NgModule({
    declarations: [
        ...declarations,
        RegistrationFormComponent
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