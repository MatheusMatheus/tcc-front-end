//TODO: Buscar eventos de acordo com maior número de compras (Eventos Populares),
// perto da localização do usuário (Perto de você) e
// filmes populares


import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/dominio/Evento';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss']
})
export class CardEventoComponent implements OnInit {

  eventos: Evento[] = [];

  responsiveOptions;

  constructor(private router: ActivatedRoute) {
    this.responsiveOptions = [
      {
        breakpoint: '1350px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '800px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  mostraRota() {
    console.log(this.router);
  }

  ngOnInit(): void {

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Gretchen',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Tiririca',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    });


  }

}
