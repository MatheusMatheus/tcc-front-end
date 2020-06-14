import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { InputBuscaComponent } from './input-busca/input-busca.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [MenuComponent, InputBuscaComponent, RodapeComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [MenuComponent, InputBuscaComponent, RodapeComponent]
})
export class InfraModule { }
