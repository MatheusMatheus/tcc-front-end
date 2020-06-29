import {Component, OnDestroy, OnInit} from '@angular/core';
import {Evento} from '../../../../dominio/Evento';
import {EventoService} from '../../../../services/evento/evento.service';
import {DialogService, DynamicDialogRef} from 'primeng';
import {EventoComponent} from '../../../cliente-final/negocio/checkout/evento/main/evento.component';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss'],
  providers: [DialogService]
})
export class CriarEventoComponent implements OnInit, OnDestroy {

  evento: Evento;

  categorias: string[];

  ref: DynamicDialogRef;


  constructor(private eventoService: EventoService,
              public dialogService: DialogService) { }

  ngOnInit(): void {
    this.evento = this.eventoService.criaEventoVazio();
    this.categorias = this.eventoService.getCategorias();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  mostrarPreview() {
    this.ref = this.dialogService.open(EventoComponent, {
      data: this.evento,
      header: 'Preview da página do evento',
      width: '80%',
      style: {'margin-top': '4em'},
      contentStyle: {'max-height': '800px', overflow: 'auto'}
    });

    this.ref.onClose.subscribe(() => {
      console.log('Fechou');
    });
  }

}
