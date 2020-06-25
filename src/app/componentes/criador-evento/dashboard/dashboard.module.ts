import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule, InputTextModule} from 'primeng';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
