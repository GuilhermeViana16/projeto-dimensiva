import { Component, OnInit } from '@angular/core';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { GerenciarCarrosService } from './gerenciar-carros.service';

@Component({
  selector: 'app-gerenciar-carros',
  templateUrl: './gerenciar-carros.component.html',
  styleUrls: ['./gerenciar-carros.component.css']
})
export class GerenciarCarrosComponent implements OnInit {

  carros: CarroItem[] =[];
  carro: CarroItem;

  constructor(private data: GerenciarCarrosService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeCarros().subscribe(res => {
      this.carros = res;
      console.log(this.carros);
    })
  }
}
