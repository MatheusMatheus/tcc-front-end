import { Component, OnInit } from '@angular/core';
import {Evento} from '../../../../dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss']
})
export class CriarEventoComponent implements OnInit {

  evento: Evento;

  categorias: string[];

  options: any;

  overlays: any[];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEventoVazio();
    this.categorias = this.eventoService.getCategorias();
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
  }

}
