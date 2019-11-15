import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { BORGESCAR2_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Marca } from 'src/app/marcas/marca/marca.model';
import { Autor } from './autor.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroCarroService {

  constructor(private http: HttpClient) { }

  cadastro(carro: CarroItem): Observable<CarroItem>{
    return this.http.post<CarroItem>(`${BORGESCAR2_API}/carro`, carro)
  }

  obterFkCarros(): Observable<Marca[]>{
    return this.http.get<Marca[]>(`${BORGESCAR2_API}/marcas`)
  }

  obterAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(`${BORGESCAR2_API}/autor`)
  }
}