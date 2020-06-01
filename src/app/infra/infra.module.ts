import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [MenuComponent]
})
export class InfraModule { }
