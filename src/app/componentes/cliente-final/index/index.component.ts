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

  constructor(private fotosService: FotosService) { }

  ngOnInit(): void {
    this.images = this.fotosService.getFotos();
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

}
