import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../../../dominio/Cliente';
import {CategoriaEvento} from '../../../../../dominio/enums/CategoriaEvento';
import {Evento} from '../../../../../dominio/Evento';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {

  pais: string;
  paises: any[];
  eventosInseridos: Evento[] = [];
  quantidade = 1;
  cliente: Cliente;
  quantidades: number[];
  metodoPagamento: string;

  constructor(private route: ActivatedRoute) {
    this.paises = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];
    this.cliente = {
      nome: '',
      email: '',
      pais: '',
      celular: '',
      login: {
        usuario: '',
        senha: ''
      }
    };

  }



  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => console.log(params));

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
