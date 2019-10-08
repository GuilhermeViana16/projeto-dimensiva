import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from 'src/app/loja-detail/carrinho-compra/carrinho-compra.model'

@Component({
  selector: 'app-compra-items',
  templateUrl: './compra-items.component.html'
})
export class CompraItemsComponent implements OnInit {

  @Input() items: CarrinhoItem[]

  @Output() increaseQty = new EventEmitter<CarrinhoItem>()
  @Output() decreaseQty = new EventEmitter<CarrinhoItem>()
  @Output() remove = new EventEmitter<CarrinhoItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CarrinhoItem){
    this.increaseQty.emit(item)
  }

 emitDecreaseQty(item: CarrinhoItem){
   this.decreaseQty.emit(item)
 }

 emitRemove(item: CarrinhoItem){
   this.remove.emit(item)
 }

}
