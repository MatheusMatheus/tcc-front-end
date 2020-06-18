import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfraModule} from 'src/app/infra/infra.module';
import {GalleriaModule} from 'primeng/galleria';
import {BannerComponent} from './banner/banner.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InputTextModule} from 'primeng/inputtext';
import {CategoriasEventoComponent} from './categorias-evento/categorias-evento.component';
import {ButtonModule} from 'primeng/button';
import {CardEventoComponent} from './card-evento/card-evento.component';
import {CarouselModule} from 'primeng/carousel';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ResetarSenhaComponent} from './resetar-senha/resetar-senha.component';
import {CriarContaComponent} from './criar-conta/criar-conta.component';
import {FormsModule} from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputMaskModule} from 'primeng/inputmask';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {EventoComponent} from './evento/main/evento.component';
import {AccordionModule} from 'primeng/accordion';
import {EscolhaIngressoComponent} from './evento/escolha-ingresso/escolha-ingresso.component';
import {DropdownModule} from 'primeng/dropdown';
import {NgSelectModule} from '@ng-select/ng-select';

const rotas: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperarSenha', component: ResetarSenhaComponent},
  {path: 'criarConta', component: CriarContaComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'evento', component: EventoComponent}
];

@NgModule({
  declarations: [
    BannerComponent,
    CategoriasEventoComponent,
    CardEventoComponent,
    LoginComponent,
    IndexComponent,
    ResetarSenhaComponent,
    CriarContaComponent,
    CarrinhoComponent,
    EventoComponent,
    EscolhaIngressoComponent
  ],
  imports: [
    CommonModule,
    InfraModule,
    GalleriaModule,
    FlexLayoutModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    FormsModule,
    AutoCompleteModule,
    InputMaskModule,
    AccordionModule,
    DropdownModule,
    NgSelectModule,
    RouterModule.forChild(rotas),
  ],
  exports: [
    BannerComponent
  ]
})
export class ClienteFinalModule {
}
