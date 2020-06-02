import { Component, OnInit } from '@angular/core';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';

@Component({
  selector: 'categorias-evento',
  templateUrl: './categorias-evento.component.html',
  styleUrls: ['./categorias-evento.component.scss']
})
export class CategoriasEventoComponent implements OnInit {

  categorias: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCategorias();
    console.table(this.categorias)
  }

  //TODO: Buscar categorias de eventos em algum serviço a ser criado
  //TODO: Criar serviço de busca de categorias de eventos

  getCategorias() {
    for(let value in CategoriaEvento) {
      if(typeof CategoriaEvento[value] === 'number') {
        this.categorias.push(value);
      }
      
    }
  } 

}
