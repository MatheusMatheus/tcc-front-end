import { Injectable } from '@angular/core';
import {Evento} from '../../dominio/Evento';
import {CategoriaEvento} from '../../dominio/enums/CategoriaEvento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  public criaEventos(): Evento[] {
    const eventos: Evento[] = [];
    for (let i = 0; i < 10; i++) {
      eventos.push(this.criaEvento());
    }
    return eventos;
  }

  criaEvento(): Evento {
    return {
      nome: 'Abestado',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      valor: 350,
      menorDesacompanhado: false,
      categoria: CategoriaEvento.show
    };
  }

  criaEventoVazio(): Evento {
    return {
      nome: '',
      local: '',
      data: new Date().toLocaleDateString(),
      hora: '',
      valor: 0,
      menorDesacompanhado: false,
      categoria: CategoriaEvento.show
    };
  }

  // TODO: Buscar categorias de eventos em algum serviço a ser criado
  // TODO: Criar serviço de busca de categorias de eventos
  getCategorias() {
    const categorias: string[] = [];
    for (const value in CategoriaEvento) {
      if (typeof CategoriaEvento[value] === 'number') {
        categorias.push(value);
      }
    }
    return categorias;
  }
}
