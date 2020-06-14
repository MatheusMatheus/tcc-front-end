import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/app/dominio/Evento';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  evento: Evento

   constructor() { }

  ngOnInit(): void {
    this.evento = this.criaEvento();
  }

  criaEvento() : Evento {
    return {
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    } 
  }


}
