import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {InputBuscaComponent} from './input-busca/input-busca.component';
import {RodapeComponent} from './rodape/rodape.component';
import {DropdownModule} from 'primeng';
import {FormsModule} from '@angular/forms';
import {InputTextoComponent} from './input/input-texto.component';


@NgModule({
  declarations: [
    InputBuscaComponent,
    RodapeComponent,
    InputTextoComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    InputBuscaComponent,
    InputTextoComponent,
    RodapeComponent
  ]
})
export class InfraModule {
}
