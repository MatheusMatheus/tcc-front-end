import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
   {
     path: '',
     loadChildren: () => import('./componentes/cliente-final/view/view.module')
       .then(m => m.ViewModule)
   },
  {
    path: 'conta',
    loadChildren: () => import('./componentes/cliente-final/negocio/conta-usuario/conta-usuario.module')
      .then(m => m.ContaUsuarioModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./componentes/cliente-final/negocio/checkout/checkout.module')
      .then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
