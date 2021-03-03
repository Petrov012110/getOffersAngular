import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

const materials = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTreeModule,
  MatListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule
]

@NgModule({

  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
