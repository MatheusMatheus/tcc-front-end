import { CategoriaEvento } from './enums/CategoriaEvento';


export interface Evento {
    nome: string;
    local: string;
    data: Date;
    hora: string;
    valor: number;
    categoria: CategoriaEvento;
}