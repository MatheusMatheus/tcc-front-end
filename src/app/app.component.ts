import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Evento} from './dominio/Evento';
import {MenuItem} from 'primeng';

const mobile = 800;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  exibir = false;

  isMobile = false;

  items: MenuItem[];

  constructor() {
  }

  evento: Evento;
  colorido = false;

  toggle() {
    this.exibir = !this.exibir;
    return this.exibir;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.colorido = window.pageYOffset > 80;
  }

  @HostListener('window:resize', ['$event'])
  tamanhoDaTela() {
    this.isMobile = window.innerWidth < mobile;
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Minha conta' },
      { label: 'Criar Evento' },
      { label: 'Show' },
      { label: 'Esporte' },
      { label: 'Cinema' },
      { label: 'Jogo' },
      { label: 'Teatro' },
      { label: 'Artes' },
    ];
  }


}
