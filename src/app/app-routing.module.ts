import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { GerenciarMarcasComponent } from './painel-de-controle/gerenciar-marcas/gerenciar-marcas.component';
import { GerenciarCarrosComponent } from './painel-de-controle/gerenciar-carros/gerenciar-carros.component';
import { CadastroCarroComponent } from './painel-de-controle/cadastro-carro/cadastro-carro.component';
import { CadastroMarcaComponent } from './painel-de-controle/cadastro-marca/cadastro-marca.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marcas', component: MarcasComponent},
  {path: 'marcas/:id', component: MarcaDetailComponent},

  {path: 'gerenciar-marcas', component: GerenciarMarcasComponent},
  {path: 'gerenciar-carros', component: GerenciarCarrosComponent},
  {path: 'cadastrar-carro', component: CadastroCarroComponent},
  {path: 'cadastrar-marca', component: CadastroMarcaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
