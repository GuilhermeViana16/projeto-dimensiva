import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../../marcas/marca/marca.model';
import { BORGESCAR2_API } from '../../app.api';


@Injectable({
  providedIn: 'root'
})
export class GerenciarMarcasService {

  constructor(private http: HttpClient) { }

  listaDeMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(`${BORGESCAR2_API}/marcas`);
  }
}
