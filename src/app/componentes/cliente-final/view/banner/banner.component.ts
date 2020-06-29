import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Evento } from 'src/app/dominio/Evento';

const mobile = 900;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  evento: Evento;

  @Input()
  mostrarBusca ? = false;


  isMobile = true;

  constructor() { }

  ngOnInit(): void {
    this.evento.nome = 'Guns and Roses';
  }

  @HostListener('window:resize', ['$event'])
  tamanhoDaTela() {
    this.isMobile = window.innerWidth < mobile;
  }
}
