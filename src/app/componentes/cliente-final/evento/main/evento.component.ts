import {Component, HostListener, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';

const mobile = 900;

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  evento: Evento;

  isMobile = true;

  odemPrecoSelecionada: string;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.tamanhoDaTela();
    this.evento = this.eventoService.criaEvento();
  }

  @HostListener('window:resize', ['$event'])
  tamanhoDaTela() {
        this.isMobile = window.innerWidth < mobile;
  }

  get ordemPreco(): string[] {
    return ['maior-menor', 'menor-maior'];
  }

}
