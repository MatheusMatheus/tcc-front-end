import {Component, HostListener, OnInit} from '@angular/core';
import {Evento} from './dominio/Evento';
import {MenuItem} from 'primeng';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  display = false;

  constructor(private router: Router) {
  }

  evento: Evento;
  colorido = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.colorido = window.pageYOffset > 80;
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
