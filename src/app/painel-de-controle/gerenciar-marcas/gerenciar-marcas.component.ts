import { Component, OnInit } from '@angular/core';
import { Marca } from '../../marcas/marca/marca.model';
import { GerenciarMarcasService } from './gerenciar-marcas.service';

@Component({
  selector: 'app-gerenciar-marcas',
  templateUrl: './gerenciar-marcas.component.html',
  styleUrls: ['./gerenciar-marcas.component.css']
})
export class GerenciarMarcasComponent implements OnInit {

  marcas: Marca[] =[];
  marca: Marca;

  constructor(private data: GerenciarMarcasService) { }


  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeMarcas().subscribe(res => {
      this.marcas = res;
      console.log(this.marcas);
    })
  }
}
