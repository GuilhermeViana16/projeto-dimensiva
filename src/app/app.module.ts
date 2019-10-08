import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { routes } from './app-routing.module'
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LojasComponent } from './lojas/lojas.component';
import { LojaComponent } from './lojas/loja/loja.component';

import { LojasService } from './lojas/lojas.service';
import { LojaDetailComponent } from './loja-detail/loja-detail.component';
import { ProdutoComponent } from './loja-detail/produto/produto.component';
import { CarrinhoCompraComponent } from './loja-detail/carrinho-compra/carrinho-compra.component';
import { ProdutoItemComponent } from './loja-detail/produto-item/produto-item.component';
import { CarrinhoCompraService } from './loja-detail/carrinho-compra/carrinho-compra.service';
import { CompraComponent } from './compra/compra.component';
import { FooterComponent } from './footer/footer.component';
import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { GerenciarVendasComponent } from './painel-controle/gerenciar-vendas/gerenciar-vendas.component';
import { GerenciarEstoqueComponent } from './painel-controle/gerenciar-estoque/gerenciar-estoque.component';
import { GerenciarLojasComponent } from './painel-controle/gerenciar-lojas/gerenciar-lojas.component';
import { SidebarComponent } from './painel-controle/sidebar/sidebar.component';
import { NovoProdutoComponent } from './painel-controle/novo-produto/novo-produto.component';
import { NovaLojaComponent } from './painel-controle/nova-loja/nova-loja.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InputComponent } from './shared/input/input.component';
import { CompraItemsComponent } from './compra/compra-items/compra-items.component';
import { CompraService } from './compra/compra.service';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';
import { DeliveryCostsComponent } from './compra/delivery-costs/delivery-costs.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LojasComponent,
    LojaComponent,
    LojaDetailComponent,
    ProdutoComponent,
    CarrinhoCompraComponent,
    ProdutoItemComponent,
    CompraComponent,
    FooterComponent,
    PainelControleComponent,
    GerenciarVendasComponent,
    GerenciarEstoqueComponent,
    GerenciarLojasComponent,
    SidebarComponent,
    NovoProdutoComponent,
    NovaLojaComponent,
    CompraComponent,
    InputComponent,
    CompraItemsComponent,
    CompraFinalizadaComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [LojasService, CarrinhoCompraService, CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
