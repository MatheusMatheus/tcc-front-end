import {Component, Input, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';

@Component({
  selector: 'app-eventos-categoria',
  templateUrl: './eventos-categoria.component.html',
  styleUrls: ['./eventos-categoria.component.scss']
})
export class EventosCategoriaComponent implements OnInit {

  @Input()
  eventos: Evento[];

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.filtro);
  }

}
