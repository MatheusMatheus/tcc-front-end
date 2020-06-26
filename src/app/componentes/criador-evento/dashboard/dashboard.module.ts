import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule, CardModule, ChartModule, InputTextModule, ProgressBarModule} from 'primeng';
import {DashboardComponent} from './dashboard.component';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {CardAnalyticsComponent} from './card-analytics/card-analytics.component';
import {CrudEventoModule} from '../crud-evento/crud-evento.module';
import {TotalizacaoComponent} from './totalizacao/totalizacao.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { CalendarioEventosComponent } from './calendario-eventos/calendario-eventos.component';


@NgModule({
  declarations: [DashboardComponent, DashboardHomeComponent, CardAnalyticsComponent, TotalizacaoComponent, CalendarioEventosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CrudEventoModule,
    ProgressBarModule,
    ChartModule,
    FullCalendarModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
