import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReportsComponent } from './reports/reports.component';
// import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PagesComponent,
    SideNavComponent,
    TopNavComponent,
    DashboardComponent,
    HomeComponent,
    ServicesComponent,
    ActivitiesComponent,
    ReportsComponent,
    // DashComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    // HttpClientModule
  ]
})
export class PagesModule { }
