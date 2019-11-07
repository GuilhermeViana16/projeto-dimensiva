import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BORGESCAR2_API } from '../app.api';
import { Marca } from './marca/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  obterMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(`${BORGESCAR2_API}/marcas`)
  }

  obterMarcasPeloId(id: string): Observable<Marca>{
    return this.http.get<Marca>(`${BORGESCAR2_API}/marcas/${id}`)
  }

  // obterCarroDeMarca(id: string): Observable<CarroItem[]>{
  //   return this.http.get<CarroItem[]>(`${BORGESCAR2_API}/marcas/${id}/carro`)
  // }
}