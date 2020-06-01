import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfraModule } from './infra/infra.module';
import { ClienteFinalModule } from './componentes/cliente-final/cliente-final.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfraModule,
    ClienteFinalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
