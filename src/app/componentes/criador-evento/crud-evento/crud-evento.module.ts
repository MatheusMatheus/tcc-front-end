import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListagemEventoComponent} from './listagem-evento/listagem-evento.component';
import {TableModule} from 'primeng/table';
import {CriarEventoComponent} from './criar-evento/criar-evento.component';
import {CrudEventoComponent} from './crud-evento.component';
import {CardModule} from 'primeng/card';
import {ButtonModule, MenuModule, RadioButtonModule} from 'primeng';
import {CrudEventoRoutingModule} from './crud-evento-routing.module';
import {InfraModule} from '../../../infra/infra.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CriarIngressoComponent} from './criar-ingresso/criar-ingresso.component';
import {AccordionModule} from 'primeng/accordion';
import { TipoPrecoComponent } from './criar-ingresso/tipo-preco/tipo-preco.component';

@NgModule({
    declarations: [
      ListagemEventoComponent,
      CriarEventoComponent,
      CrudEventoComponent,
      CriarIngressoComponent,
      TipoPrecoComponent,
    ],
    exports: [
        ListagemEventoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    MenuModule,
    CrudEventoRoutingModule,
    InfraModule,
    RadioButtonModule,
    HttpClientModule,
    AccordionModule
  ]
})
export class CrudEventoModule { }
