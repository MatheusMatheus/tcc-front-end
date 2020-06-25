import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {InputBuscaComponent} from './input-busca/input-busca.component';
import {RodapeComponent} from './rodape/rodape.component';
import {CalendarModule, DropdownModule, InputMaskModule} from 'primeng';
import {FormsModule} from '@angular/forms';
import {InputTextoComponent} from './input/input-texto.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputCalendarComponent } from './input-calendar/input-calendar.component';


@NgModule({
  declarations: [
    InputBuscaComponent,
    RodapeComponent,
    InputTextoComponent,
    InputMaskComponent,
    InputCalendarComponent
  ],
    imports: [
        CommonModule,
        MenubarModule,
        InputTextModule,
        InputMaskModule,
        DropdownModule,
        FormsModule,
        CalendarModule
    ],
  exports: [
    InputBuscaComponent,
    InputTextoComponent,
    InputMaskComponent,
    RodapeComponent
  ]
})
export class InfraModule {
}
