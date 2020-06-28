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
      id: 'X45A54E',
      ingressos: [{
        id: 'F131H351',
        preco: 350,
        tipo: String(CategoriaEvento.show),
        meiaEntrada: false
      }],
      qtdMaxima: 0,
      qtdMinima: 0,
      nome: 'Abestado',
      local: 'Mane Garrincha',
      data: new Date().toLocaleDateString(),
      hora: '20:00',
      menorDesacompanhado: false,
      categoria: CategoriaEvento.show,
      organizador: 'Matheus Lindo Produções'
    };
  }

  criaEventoVazio(): Evento {
    return {
      id: '',
      ingressos: [],
      qtdMaxima: 0,
      qtdMinima: 0,
      nome: '',
      local: '',
      data: new Date().toLocaleDateString(),
      hora: '',
      menorDesacompanhado: false,
      categoria: CategoriaEvento.show,
      organizador: ''
    };
  }

  criarIngressoVazio() {
    return {
      id: '',
      preco: 0,
      tipo: '',
      meiaEntrada: false
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
