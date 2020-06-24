import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {CardEventoComponent} from './card-evento/card-evento.component';
import {IndexComponent} from './index/index.component';
import {CategoriasEventoComponent} from './categorias-evento/categorias-evento.component';
import {AutoCompleteModule, ButtonModule, CarouselModule, InputTextModule} from 'primeng';
import {InfraModule} from '../../../infra/infra.module';
import {FlexModule} from '@angular/flex-layout';

const rotas: Routes = [
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    BannerComponent,
    CardEventoComponent,
    IndexComponent,
    CategoriasEventoComponent
  ],
  imports: [
    CarouselModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    InfraModule,
    FlexModule,
    CommonModule,
    RouterModule.forChild(rotas)
  ],
  exports: [IndexComponent, BannerComponent]
})
export class ViewModule {

}
