import { Component, OnInit } from '@angular/core';
import { CarrinhoItem } from 'src/app/loja-detail/carrinho-compra/carrinho-compra.model'
import { CompraService } from './compra.service'
import { Compra, CompraItem } from './compra.model';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  delivery: number = 8

  compraId: object

  constructor(private router: Router, private compraService: CompraService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.compraService.itemsValue()
  }

  carrinhoItems(): CarrinhoItem[] {
    return this.compraService.carrinhoItems()
  }

  increaseQty(item: CarrinhoItem){
    this.compraService.increaseQty(item)
  }

 decreaseQty(item: CarrinhoItem){
   this.compraService.decreaseQty(item)
 }

 remove(item: CarrinhoItem){
   this.compraService.remove(item)
 }

 checarCompra(compra: Compra) {
  compra.compraItems = this.carrinhoItems()
    .map((item: CarrinhoItem) => new CompraItem(item.quantity, item.produtoItem.id))

  this.compraService.checarCompra(compra)
    .pipe(tap((compraId: object) => {
      compraId = compraId
    }))
    .subscribe( (compraId: object) => {
      this.router.navigate(['/compra-finalizada'])
    this.compraService.clear()
  })
}
}
