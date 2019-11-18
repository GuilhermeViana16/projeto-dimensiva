import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { GerenciarCarrosService } from './gerenciar-carros.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-gerenciar-carros',
  templateUrl: './gerenciar-carros.component.html',
  styleUrls: ['./gerenciar-carros.component.css']
})
export class GerenciarCarrosComponent implements OnInit {
  
  carros: CarroItem[] =[];
  carro: CarroItem;
  bsmodal: BsModalRef;
  @ViewChild('upgradeSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: GerenciarCarrosService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeCarros().subscribe(res => {
      this.carros = res;
      console.log(this.carros);
    })
  }

  onEdit(carro: CarroItem, template: TemplateRef<any>){
    this.carro = carro;
    this.bsmodal = this.modalService.show(template);
  }

  atualizar(){
    console.log(this.carro)
    this.data
      .atualizar(this.carro)
      .subscribe(res => this.carros.push(res));
      this.alert.show()
  }

  confirm(carro: CarroItem){
    this.carro = carro;
    this.alert2.show()
    console.log(this.carro)
  }

  remover(carro: CarroItem){
    this.carro = carro;
    this.data
      .remover(this.carro)
      .subscribe(res => this.carros.push(res));
      this.listar()
  }

  fecharModal(){
    this.bsmodal.hide();
    this.listar()
  }

} 
