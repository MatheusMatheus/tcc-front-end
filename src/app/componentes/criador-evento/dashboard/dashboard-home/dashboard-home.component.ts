import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../../services/evento/evento.service';
import {Evento} from '../../../../dominio/Evento';
import {TipoGrafico} from '../../util/dominio/enums/TipoGrafico';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  eventos: Evento[];

  graficoLinha = TipoGrafico.LINHA;
  graficoBarra = TipoGrafico.BARRA;
  graficoProgresso = TipoGrafico.PROGRESSO;
  graficoPizza = TipoGrafico.PIZZA;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventos = this.eventoService.criaEventos();
  }

}
