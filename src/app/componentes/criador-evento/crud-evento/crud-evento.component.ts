import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../services/evento/evento.service';
import {Evento} from '../../../dominio/Evento';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-crud-evento',
  templateUrl: './crud-evento.component.html',
  styleUrls: ['./crud-evento.component.scss']
})
export class CrudEventoComponent implements OnInit {

  eventos: Evento[];

  cadastrando = false;

  items: MenuItem[];

  constructor(private eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.eventos = this.eventoService.criaEventos();
    this.items = [{
      label: 'Eventos',
      items: [
        {label: 'Criar Evento', icon: 'pi pi-fw pi-plus', routerLink: 'criar'},
        {label: 'Criar Ticket', icon: 'pi pi-ticket'},
        {label: 'Lista de Convidados', icon: 'pi pi-users'},
        {label: 'Calendário de Eventos', icon: 'pi pi-calendar', routerLink: 'calendario'}
      ]
    },
      {
        label: 'Perfil',
        items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
        ]
      }];
  }
}
