import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroItem } from '../carro-item/carro-item.model';
import { MarcasService } from '../../marcas/marcas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro: Observable<CarroItem[]>

  constructor(private marcasService: MarcasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.listarCarrosDeMarca();
  }

  listarCarrosDeMarca(){
    this.carro = this.marcasService
    .obterCarroDeMarca(this.route.snapshot.params['id'])
  }
}