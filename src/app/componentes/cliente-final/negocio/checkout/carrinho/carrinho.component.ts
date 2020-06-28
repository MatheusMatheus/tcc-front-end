import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../../../dominio/Evento';
import {CategoriaEvento} from '../../../../../dominio/enums/CategoriaEvento';
import {Router} from '@angular/router';
import {EventoService} from '../../../../../services/evento/evento.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router,
              private eventoService: EventoService) {
  }

  eventosInseridos: Evento[] = [];
  quantidades: number[];
  quantidade = 1;

  ngOnInit(): void {
    this.quantidades = Array(5);
    for (let i = 0; i < this.quantidades.length; i++) {
      this.quantidades[i] = i;
    }

    this.eventosInseridos = this.eventoService.criaEventos();
  }

  finalizarPedido() {
    this.router.navigate(['/checkout/finalizar-pedido'],
      {
        queryParams: {
          eventosInseridos: this.eventosInseridos
        }, queryParamsHandling: 'preserve'
      });
  }

}
