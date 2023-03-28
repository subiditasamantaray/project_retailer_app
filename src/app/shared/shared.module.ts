import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input'
// import { HttpClientModule } from '@angular/common/http';

// import { NgChartsModule } from 'ng2-charts';
import {MatGridListModule} from '@angular/material/grid-list';

const materials = [
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatSortModule,
  MatInputModule,
  MatGridListModule

  // NgChartsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials
  ],

  exports: [
    materials

  ]
})
export class SharedModule { }
