import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { InputBuscaComponent } from './input-busca/input-busca.component';


@NgModule({
  declarations: [MenuComponent, InputBuscaComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [MenuComponent, InputBuscaComponent]
})
export class InfraModule { }
