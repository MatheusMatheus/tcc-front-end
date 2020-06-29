import {Component, OnInit} from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-categorias-evento',
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
