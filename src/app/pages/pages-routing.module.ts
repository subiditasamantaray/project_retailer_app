import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
// import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ReportsComponent } from './reports/reports.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'service',
        component: ServicesComponent
      },
      {
        path: 'activity',
        component: ActivitiesComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      }

      
      


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
