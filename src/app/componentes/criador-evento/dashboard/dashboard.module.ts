import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule, CardModule, InputTextModule} from 'primeng';
import {DashboardComponent} from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CardAnalyticsComponent } from './card-analytics/card-analytics.component';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [DashboardComponent, DashboardHomeComponent, CardAnalyticsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ChartModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
