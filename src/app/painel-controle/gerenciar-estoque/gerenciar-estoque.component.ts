import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GerenciarEstoqueService } from './gerenciar-estoque.service';
import { ProdutoItem } from 'src/app/loja-detail/produto-item/produto-item.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Produtos } from '../novo-produto/produto.model';

@Component({
  selector: 'app-gerenciar-estoque',
  templateUrl: './gerenciar-estoque.component.html',
  styleUrls: ['./gerenciar-estoque.component.css']
})
export class GerenciarEstoqueComponent implements OnInit {

  produtos: ProdutoItem[] = [];
  produto: ProdutoItem;
  bsmodal: BsModalRef;
  selectedFile: File = null;
  submitted = false;
  @ViewChild('deleteSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: GerenciarEstoqueService,
              private modalService: BsModalService,
              private gerenciarEstoqueService: GerenciarEstoqueService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeProdutos().subscribe(res => {
        this.produtos = res;
        console.log(this.produtos);
      })
  }

  onEdit(produto: Produtos, template: TemplateRef<any>){
    this.produto = produto;
    this.bsmodal = this.modalService.show(template);
  }

  atualizar(){
    console.log(this.produto)
    this.gerenciarEstoqueService
      .atualizar(this.produto)
      .subscribe(res => this.produtos.push(res));
      this.alert.show();
  }

  remover(produto: Produtos){
    this.produto = produto;
    this.gerenciarEstoqueService
      .remover(this.produto)
      .subscribe(res => this.produtos.push(res));
      this.listar();
      this.alert2.show();
  }

  fecharModal(){
    this.bsmodal.hide();
    this.listar();
  }

}
