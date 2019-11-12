import { Injectable } from '@angular/core';
import { Marca } from 'src/app/marcas/marca/marca.model';
import { Observable } from 'rxjs';
import { BORGESCAR2_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroMarcaService {

  constructor(private http: HttpClient) { }
 
  cadastro(marca: Marca): Observable<Marca>{
    return this.http.post<Marca>(`${BORGESCAR2_API}/marcas`, marca)
  }
}
