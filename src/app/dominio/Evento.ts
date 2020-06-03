import { CategoriaEvento } from './enums/CategoriaEvento';


export interface Evento {
    nome: string;
    local: string;
    data: string;
    hora: string;
    valor: number;
    categoria: CategoriaEvento;
}