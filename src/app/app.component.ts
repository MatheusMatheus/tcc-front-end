import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Evento} from './dominio/Evento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  exibir = false;

  constructor() { }

  evento: Evento;
  colorido = false;

  toggle() {
    this.exibir = !this.exibir;
    console.log(this.exibir);
    return this.exibir;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
      this.colorido = window.pageYOffset > 80;
  }

  ngOnInit(): void {
  }


}
