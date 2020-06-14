import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { InfraModule } from 'src/app/infra/infra.module';
import { GalleriaModule } from 'primeng/galleria';
import { BannerComponent } from './banner/banner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriasEventoComponent } from './categorias-evento/categorias-evento.component';
import { ButtonModule } from 'primeng/button';
import { CardEventoComponent } from './card-evento/card-evento.component';
import { CarouselModule } from 'primeng/carousel';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    IndexComponent,
     BannerComponent, 
     CategoriasEventoComponent, 
     CardEventoComponent, 
     LoginComponent],
  imports: [
    CommonModule,
    InfraModule,
    GalleriaModule,
    FlexLayoutModule,
    InputTextModule,
    ButtonModule,
    CarouselModule
  ],
  exports: [IndexComponent]
})
export class ClienteFinalModule { }
