import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {CardEventoComponent} from './card-evento/card-evento.component';
import {IndexComponent} from './index/index.component';
import {AutoCompleteModule, ButtonModule, CalendarModule, CarouselModule, DropdownModule, InputTextModule} from 'primeng';
import {InfraModule} from '../../../infra/infra.module';
import {FlexModule} from '@angular/flex-layout';
import {ListboxModule} from 'primeng/listbox';
import {FiltroEventoComponent} from './filtro-evento/filtro-evento.component';
import { EventosCategoriaComponent } from './eventos-categoria/eventos-categoria.component';
import {FormsModule} from '@angular/forms';

const rotas: Routes = [
  {path: '', component: IndexComponent},
  {path: 'eventos-categoria', component: EventosCategoriaComponent}

];

@NgModule({
  declarations: [
    BannerComponent,
    CardEventoComponent,
    IndexComponent,
    FiltroEventoComponent,
    EventosCategoriaComponent,
  ],
  imports: [
    CarouselModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    ListboxModule,
    InfraModule,
    FlexModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(rotas),
    CalendarModule,
    DropdownModule
  ],
  exports: [IndexComponent, BannerComponent]
})
export class ViewModule {

}
