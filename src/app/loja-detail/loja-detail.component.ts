import { Component, OnInit } from '@angular/core';
import { Loja } from '../lojas/loja/loja.model';
import { LojasService } from '../lojas/lojas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loja-detail',
  templateUrl: './loja-detail.component.html'
})
export class LojaDetailComponent implements OnInit {

  loja: Loja

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.listarProdutosDeLoja();
  }

  listarProdutosDeLoja(){
    this.lojasService.obterLojasPeloId(this.route.snapshot.params['id'])
    .subscribe(loja => this.loja = loja)
  }
}
