import { CategoriaEvento } from './enums/CategoriaEvento';

export interface Evento {
    id: string;
    nome: string;
    local: string;
    data: string;
    hora: string;
    organizador: string;
    menorDesacompanhado: boolean;
    categoria: CategoriaEvento;
    qtdMinima ?: number;
    qtdMaxima ?: number;
    ingressos: Ingresso[];
}

export class Ingresso {
  id: string;
  descricao ?: string;
  preco: number;
  tipo: string;
  meiaEntrada = false;
}


