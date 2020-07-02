import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Evento} from 'src/app/dominio/Evento';
import {CategoriaEvento} from '../../../../dominio/enums/CategoriaEvento';
import {FiltroEvento} from '../../../../dominio/enums/FiltroEvento';
import {Router} from '@angular/router';

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

  local = FiltroEvento.local;
  pais = FiltroEvento.pais;
  cidade = FiltroEvento.cidade;
  nome = FiltroEvento.nome;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.evento.nome = 'Guns and Roses';
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  tamanhoDaTela() {
    this.isMobile = window.innerWidth < mobile;
  }

  navigateToCategoria(filtroEvento: FiltroEvento, evento: Evento) {
    this.router.navigate(['eventos-categoria'],
      {
        state: {
          filtro: {filtroEvento, evento}
        }
      });
  }
}
