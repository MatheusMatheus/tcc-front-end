import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/dominio/Evento';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss']
})
export class CardEventoComponent implements OnInit {

  eventos: Evento[] = [];

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });
    
    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Gretchen',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Tiririca',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });


  }

}
