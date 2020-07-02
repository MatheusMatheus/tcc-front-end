import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-evento',
  templateUrl: './filtro-evento.component.html',
  styleUrls: ['./filtro-evento.component.scss']
})
export class FiltroEventoComponent implements OnInit {

  datas: Date[];

  constructor() { }

  ngOnInit(): void {
  }

}
