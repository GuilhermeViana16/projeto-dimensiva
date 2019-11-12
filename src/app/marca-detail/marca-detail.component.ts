import { Component, OnInit, TemplateRef } from '@angular/core';
import { Marca } from '../marcas/marca/marca.model';
import { MarcasService } from '../marcas/marcas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  marca: Marca

  constructor(private marcasService: MarcasService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.listarCarrosDeMarca();
  }

  listarCarrosDeMarca(){
    this.marcasService.obterMarcasPeloId(this.route.snapshot.params['id'])
    .subscribe(marca => this.marca = marca)
  }
}
