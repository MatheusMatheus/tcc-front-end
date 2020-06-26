import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {InputBuscaComponent} from './input-busca/input-busca.component';
import {RodapeComponent} from './rodape/rodape.component';
import {CalendarModule, DropdownModule, InputMaskModule} from 'primeng';
import {FormsModule} from '@angular/forms';
import {InputTextoComponent} from './input-texto/input-texto.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputCalendarComponent } from './input-calendar/input-calendar.component';
import { SelectComponent } from './select/select.component';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    InputBuscaComponent,
    RodapeComponent,
    InputTextoComponent,
    InputMaskComponent,
    InputCalendarComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    NgSelectModule
  ],
  exports: [
    InputBuscaComponent,
    InputTextoComponent,
    InputMaskComponent,
    InputCalendarComponent,
    SelectComponent,
    RodapeComponent
  ]
})
export class InfraModule {
}
