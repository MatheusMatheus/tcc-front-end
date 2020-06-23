// TODO: Buscar eventos de acordo com maior número de compras (Eventos Populares),
// perto da localização do usuário (Perto de você) e
// filmes populares


import {Component, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {CategoriaEvento} from 'src/app/dominio/enums/CategoriaEvento';
import {ActivatedRoute} from '@angular/router';

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
        breakpoint: '2000px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 4
      },

      {
        breakpoint: '1600px',
        numVisible: 3,
        numScroll: 4
      },
      {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 5
      },
      {
        breakpoint: '900px',
        numVisible: 1,
        numScroll: 3
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
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Gretchen',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });

    this.eventos.push({
      nome: 'Tiririca',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    });


  }

}
