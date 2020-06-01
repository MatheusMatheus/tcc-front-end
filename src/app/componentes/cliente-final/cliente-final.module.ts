import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { InfraModule } from 'src/app/infra/infra.module';
import {GalleriaModule} from 'primeng/galleria';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [IndexComponent, BannerComponent],
  imports: [
    CommonModule,
    InfraModule,
    GalleriaModule
  ],
  exports: [IndexComponent]
})
export class ClienteFinalModule { }
