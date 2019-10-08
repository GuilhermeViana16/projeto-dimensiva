import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GerenciarVendas } from './gerenciar-vendas.model'
import { HttpClient } from '@angular/common/http';
import { DIMENSIVA_API } from 'src/app/app.api'

@Injectable({
  providedIn: 'root'
})
export class GerenciarVendasService {

  constructor(private http: HttpClient) { }

  listaDeVendas(): Observable<GerenciarVendas[]>{
    return this.http.get<GerenciarVendas[]>(`${DIMENSIVA_API}/compras`);
  }

  remover(venda: GerenciarVendas): Observable<GerenciarVendas>{
    return this.http.delete<GerenciarVendas>(`${DIMENSIVA_API}/compras/${venda.id}`);
  }
}
