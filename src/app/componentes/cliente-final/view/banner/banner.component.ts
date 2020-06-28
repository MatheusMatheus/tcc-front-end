import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/app/dominio/Evento';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  evento: Evento;

  @Input()
  mostrarBusca ? = true;

  constructor() { }

  ngOnInit(): void {
    this.evento.nome = 'Guns and Roses';
  }
}
