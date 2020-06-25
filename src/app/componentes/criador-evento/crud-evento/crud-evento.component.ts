import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../services/evento/evento.service';
import {Evento} from '../../../dominio/Evento';

@Component({
  selector: 'app-crud-evento',
  templateUrl: './crud-evento.component.html',
  styleUrls: ['./crud-evento.component.scss']
})
export class CrudEventoComponent implements OnInit {

  eventos: Evento[];

  cadastrando = false;

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.eventos = this.eventoService.criaEventos();
  }
}
