import { Component, OnInit } from '@angular/core';
import { Marca } from './marca/marca.model';
import { MarcasService } from './marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  marcas: Marca[]

  constructor(private marcasService: MarcasService) { }

  ngOnInit() {
    this.listarMarcas();
  }

  listarMarcas(){
    this.marcasService.obterMarcas()
      .subscribe(marcas => this.marcas = marcas)
  }

}