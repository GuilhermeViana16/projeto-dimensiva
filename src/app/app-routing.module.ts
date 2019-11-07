import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marcas', component: MarcasComponent},
  {path: 'marcas/:id', component: MarcaDetailComponent},

  // {path: 'painel-controle', component: PainelControleComponent},
  // {path: 'gerenciar-marcas', component: GerenciarMarcasComponent},
  // {path: 'gerenciar-carros', component: GerenciarCarrosComponent},
  // {path: 'nova-loja', component: NovaLojaComponent},
  // {path: 'novo-produto', component: NovoProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
