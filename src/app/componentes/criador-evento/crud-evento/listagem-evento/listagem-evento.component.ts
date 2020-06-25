import {Component, Input, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';

@Component({
  selector: 'app-listagem-evento',
  templateUrl: './listagem-evento.component.html',
  styleUrls: ['./listagem-evento.component.scss']
})
export class ListagemEventoComponent implements OnInit {

  @Input()
  eventos: Evento[];

  ngOnInit(): void {
  }

}
