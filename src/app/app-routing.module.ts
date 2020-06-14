import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: './componentes/cliente-final/cliente-final.module#ClienteFinalModule'},
  {path: 'cliente-final/login', loadChildren: './componentes/cliente-final/cliente-final.module#ClienteFinalModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
