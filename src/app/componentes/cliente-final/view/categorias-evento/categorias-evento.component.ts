import { Component, OnInit } from '@angular/core';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'categorias-evento',
  templateUrl: './categorias-evento.component.html',
  styleUrls: ['./categorias-evento.component.scss']
})
export class CategoriasEventoComponent implements OnInit {

  categorias: string[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.categorias = this.eventoService.getCategorias();
  }
}
