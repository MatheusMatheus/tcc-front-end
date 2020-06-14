import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { InputBuscaComponent } from './input-busca/input-busca.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [InputBuscaComponent, RodapeComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [InputBuscaComponent, RodapeComponent]
})
export class InfraModule { }
