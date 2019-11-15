import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Marca } from '../../marcas/marca/marca.model';
import { GerenciarMarcasService } from './gerenciar-marcas.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-gerenciar-marcas',
  templateUrl: './gerenciar-marcas.component.html',
  styleUrls: ['./gerenciar-marcas.component.css']
})
export class GerenciarMarcasComponent implements OnInit {

  marcas: Marca[] =[];
  marca: Marca;
  bsmodal: BsModalRef;
  @ViewChild('upgradeSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: GerenciarMarcasService,
              private modalService: BsModalService) { }


  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeMarcas().subscribe(res => {
      this.marcas = res;
      console.log(this.marcas);
    })
  }

  onEdit(marca: Marca, template: TemplateRef<any>){
    this.marca = marca;
    this.bsmodal = this.modalService.show(template);
  }

  atualizar(){
    console.log(this.marca)
    this.data
      .atualizar(this.marca)
      .subscribe(res => this.marcas.push(res));
      this.alert.show()
  }

  remover(marca: Marca){
    this.marca = marca;
    this.data
      .remover(this.marca)
      .subscribe(res => this.marcas.push(res));
      this.listar()
      this.alert2.show()
  }

  fecharModal(){
    this.bsmodal.hide();
    this.listar()
  }

}
