import { CategoriaEvento } from './enums/CategoriaEvento';

export interface Evento {
    id: string;
    nome: string;
    artista ?: string;
    localizacao: Localizacao;
    data: string;
    hora: string;
    organizador: string;
    menorDesacompanhado: boolean;
    categoria: CategoriaEvento;
    qtdMinima ?: number;
    qtdMaxima ?: number;
    ingressos: Ingresso[];
    imagemPrincipal ?: string;
    imagemSecundaria ?: string;
}

export class Ingresso {
  id: string;
  tipos: TipoIngresso[];
  meiaEntrada = false;
}

export class TipoIngresso {
  preco: number;
  descricao ?: string;
  quantidade: number;
}

export class Localizacao {
  latitude ?: string;
  longitude ?: string;
  imagemCidade ?: string;
  pais: string;
  cidade: string;
  local: string;
}
