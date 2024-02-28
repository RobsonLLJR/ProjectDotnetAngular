import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl= "https://localhost:44315";
  http=inject(HttpClient);
  constructor() { }

  getAllProdutos(){
    return this.http.get<IProduto[]>(this.apiUrl+"/api/Produto/Get")
  }
}
