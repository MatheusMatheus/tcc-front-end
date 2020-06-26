import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListagemEventoComponent} from './listagem-evento/listagem-evento.component';
import {TableModule} from 'primeng/table';
import {RouterModule, Routes} from '@angular/router';
import {CriarEventoComponent} from './criar-evento/criar-evento.component';
import {CrudEventoComponent} from './crud-evento.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng';


const rotas: Routes = [
  { path: 'crud', component: CrudEventoComponent },
  { path: 'criar', component: CriarEventoComponent }
];

@NgModule({
    declarations: [ListagemEventoComponent, CriarEventoComponent, CrudEventoComponent],
    exports: [
        ListagemEventoComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        CardModule,
        RouterModule.forChild(rotas),
        ButtonModule
    ]
})
export class CrudEventoModule { }
