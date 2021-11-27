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


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { enableIndexedDbPersistence, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from "src/environments/environment";
import { AuthFirebaseService } from "./shared/services/auth-firebase.service";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { ResetPasswordFormComponent } from "./shared/components/reset-password-form/reset-password-form.component";
import { SourceService } from "./shared/services/source.service";
import { ItemsTreeComponent } from './shared/components/items-tree/items-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ManagerService } from "./shared/services/manager.service";
import { CacheService } from "./shared/services/cache.service";
import { BannerComponent } from "../shared/components/banner/banner.component";
import { ParseTableComponent } from './shared/components/parse-table/parse-table.component';

const imports: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild([
        {
            path: '', component: UserLayoutComponent, children: [
                {
                    path: '', redirectTo: '/user/login', pathMatch: 'full'
                },
                {
                    path: 'sign-in', component: LoginPageComponent
                },
                {
                    path: 'sign-up', component: SingUpPageComponent
                },
                {
                    path: 'reset-password', component: ResetPasswordPageComponent
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
    LoginFormComponent,
    RegistrationFormComponent,
    ResetPasswordFormComponent,
    SingUpPageComponent,
    ResetPasswordPageComponent,
    ItemsTreeComponent,
];

const exports: any[] = [
    RouterModule
];

const providers: any[] = [
    AuthService,
    LocalStorageService,
    AuthGuardService,
    AuthFirebaseService,
    SourceService,
    ManagerService,
    CacheService
];

@NgModule({
    declarations: [
        ...declarations,
        ParseTableComponent
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