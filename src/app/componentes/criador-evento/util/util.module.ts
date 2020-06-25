import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FormularioEventoComponent} from './formulario-evento/formulario-evento.component';
import {InfraModule} from '../../../infra/infra.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [FormularioEventoComponent],
  imports: [
    CommonModule,
    FormsModule,
    InfraModule,
    NgSelectModule
  ]
})
export class UtilModule { }
