import { Component, OnInit } from '@angular/core';
import {Evento} from '../../../dominio/Evento';
import {CategoriaEvento} from '../../../dominio/enums/CategoriaEvento';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor() { }
  eventosInseridos: Evento[] = [];
  quantidades: number[];
  quantidade = 1;

  ngOnInit(): void {
    this.quantidades = Array(5);
    for (let i = 0; i < this.quantidades.length; i++) {
      this.quantidades[i] = i;
    }

    this.eventosInseridos.push({
      nome: 'Guns and Roses asdasdsdas asddsadsd',
      local: 'Brasília',
      data: new Date().toLocaleDateString(),
      hora: '00:00',
      valor: 450,
      categoria: CategoriaEvento.show
    });

    this.eventosInseridos.push({
      nome: 'Guns and Roses',
      local: 'Brasília',
      data: new Date().toLocaleDateString(),
      hora: '00:00',
      valor: 450,
      categoria: CategoriaEvento.show
    });

    this.eventosInseridos.push({
      nome: 'Guns and Roses',
      local: 'Brasília',
      data: new Date().toLocaleDateString(),
      hora: '00:00',
      valor: 450,
      categoria: CategoriaEvento.show
    });

    this.eventosInseridos.push({
      nome: 'Guns and Roses',
      local: 'Brasília',
      data: new Date().toLocaleDateString(),
      hora: '00:00',
      valor: 450,
      categoria: CategoriaEvento.show
    });
  }

}
