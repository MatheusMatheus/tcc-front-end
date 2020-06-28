import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Evento} from '../../../../../dominio/Evento';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-tipo-preco',
  templateUrl: './tipo-preco.component.html',
  styleUrls: ['./tipo-preco.component.scss']
})
export class TipoPrecoComponent implements OnInit, OnDestroy {

  @Input()
  tipoIngressoSubject: Subject<string>;

  @Input()
  evento: Evento;

  tipoIngresso: string;

  constructor() { }

  ngOnInit(): void {
    this.tipoIngressoSubject.subscribe(event => {
      this.tipoIngresso = event;
    });
  }

  ngOnDestroy() {
    this.tipoIngressoSubject.unsubscribe();
  }

}
