import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoItem } from 'src/app/loja-detail/produto-item/produto-item.model';
import { DIMENSIVA_API } from 'src/app/app.api'

@Injectable({
  providedIn: 'root'
})
export class GerenciarEstoqueService {

  constructor(private http: HttpClient) { }

  listaDeProdutos(): Observable<ProdutoItem[]>{
    return this.http.get<ProdutoItem[]>(`${DIMENSIVA_API}/produto`);
  }

  atualizar(produto: ProdutoItem): Observable<ProdutoItem>{
    return this.http.put<ProdutoItem>(`${DIMENSIVA_API}/produto/${produto.id}`, produto)
  }

  remover(produto: ProdutoItem): Observable<ProdutoItem>{
    return this.http.delete<ProdutoItem>(`${DIMENSIVA_API}/produto/${produto.id}`);
  }
}
