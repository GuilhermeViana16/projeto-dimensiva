import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { CarroItem } from './carro-item.model';
import { Marca } from 'src/app/marcas/marca/marca.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-carro-item',
  templateUrl: './carro-item.component.html',
  styleUrls: ['./carro-item.component.css']
})
export class CarroItemComponent implements OnInit {

  carros: CarroItem[] =[];
  carro: CarroItem;
  bsmodal: BsModalRef;
  @Input() carroItem: CarroItem

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  visualizar(carro: CarroItem, template: TemplateRef<any>){
    this.carro = carro;
    this.bsmodal = this.modalService.show(template);
  }

  fecharModal(){
    this.bsmodal.hide();
  }

}
