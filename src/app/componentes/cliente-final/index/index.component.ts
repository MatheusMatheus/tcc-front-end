import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos/fotos.service';
import { Evento } from 'src/app/dominio/Evento';
import { CategoriaEvento } from 'src/app/dominio/enums/CategoriaEvento';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

public evento: Evento

  constructor(private fotosService: FotosService) { }

  ngOnInit(): void {
    this.images = this.fotosService.getFotos();
    this.evento = this.criaEvento();
  }

  images: any[];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  criaEvento() : Evento {
    return {
      nome: 'Guns and Roses',
      local: 'Mane Garrincha',
      data: new Date(),
      hora: "20:00",
      valor: 350,
      categoria: CategoriaEvento.show
    } 
  }

}
