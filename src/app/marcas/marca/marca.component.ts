import { Component, OnInit, Input } from '@angular/core';
import { Marca } from './marca.model';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  @Input() marca: Marca

  constructor() { }

  ngOnInit() {
  }

}