import { Component, OnInit } from '@angular/core';
import { CarrinhoCompraService } from './carrinho-compra.service';

@Component({
  selector: 'app-carrinho-compra',
  templateUrl: './carrinho-compra.component.html'
})
export class CarrinhoCompraComponent implements OnInit {

  constructor(private carrinhoCompraService: CarrinhoCompraService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.carrinhoCompraService.items;
  }

  clear() {
    this.carrinhoCompraService.clear()
  }

  removeItem(item: any){
    this.carrinhoCompraService.removeItem(item)
  }

  addItem(item: any){
    this.carrinhoCompraService.addItem(item)
  }

  total(): number {
    return this.carrinhoCompraService.total()
  }
}
