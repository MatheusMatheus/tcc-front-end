import { Injectable } from '@angular/core';
import {Evento} from '../../dominio/Evento';
import {CategoriaEvento} from '../../dominio/enums/CategoriaEvento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  criaEvento(): Evento {
    return {
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      categoria: CategoriaEvento.show
    };
  }
}