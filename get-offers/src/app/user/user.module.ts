import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from "@angular/fire/compat";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { AuthService } from "./shared/services/auth.service";
import { CacheService } from "./shared/services/cache.service";
import { SourceService } from "./shared/services/source.service";
import { AuthGuardService } from "./shared/services/auth.guard.service";
import { LocalStorageService } from "./shared/services/local-storage.service";
import { AuthFirebaseService } from "./shared/services/auth-firebase.service";

import { SharedModule } from "../shared/shared.module";
import { environment } from "../../environments/environment";

import { ItemPageComponent } from './item-page/item-page.component';
import { LoginPageComponent } from "./login-page/login-page.component";
import { SearchPageComponent } from './search-page/search-page.component';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import { GroupsComponent } from './shared/components/groups/groups.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { ItemsTreeComponent } from './shared/components/items-tree/items-tree.component';
import { UserLayoutComponent } from "./shared/components/user-layout/user-layout.component";
import { ParseTableComponent } from './shared/components/parse-table/parse-table.component';
import { FavoritesItemPageComponent } from './favorites-item-page/favorites-item-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { RegistrationFormComponent } from './shared/components/registration-form/registration-form.component';
import { ParseTableFavoritesComponent } from "./shared/components/parse-table/parse-table-favorites.component";
import { ResetPasswordFormComponent } from "./shared/components/reset-password-form/reset-password-form.component";

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
    MatTableModule,
    MatPaginatorModule,
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
    ParseTableFavoritesComponent,
    ParseTableComponent,
    GroupsComponent
];

const exports: any[] = [
    RouterModule
];

const providers: any[] = [
    AuthService,
    LocalStorageService,
    AuthGuardService,
    SourceService,
    CacheService
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
    public static forRoot(): ModuleWithProviders<UserModule> {
        return {
            ngModule: UserModule,
            providers: [AuthFirebaseService]
        };
    }
}