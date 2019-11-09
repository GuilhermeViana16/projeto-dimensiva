import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { BORGESCAR2_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class GerenciarCarrosService {

  constructor(private http: HttpClient) { }

  listaDeCarros(): Observable<CarroItem[]>{
    return this.http.get<CarroItem[]>(`${BORGESCAR2_API}/carro`);
  }
}
