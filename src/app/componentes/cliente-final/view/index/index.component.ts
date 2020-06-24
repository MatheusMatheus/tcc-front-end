import {Component, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private eventoService: EventoService) { }

  evento: Evento;

  ngOnInit(): void {
    this.evento = this.eventoService.criaEvento();
  }

}
