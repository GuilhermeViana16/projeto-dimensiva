import { Component, OnInit, Input } from '@angular/core';
import { CarroItem } from './carro-item.model';

@Component({
  selector: 'app-carro-item',
  templateUrl: './carro-item.component.html',
  styleUrls: ['./carro-item.component.css']
})
export class CarroItemComponent implements OnInit {

  @Input() carroItem: CarroItem

  constructor() { }

  ngOnInit() {
  }

}
