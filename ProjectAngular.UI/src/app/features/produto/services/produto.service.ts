import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduto } from '../interfaces/produto';
import { AddProdutoRequest } from '../models/add-produto-request.model';
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

  addProduto(model: AddProdutoRequest){
    console.log(model);
    return this.http.post(this.apiUrl+"/api/Produto", model);
  }
}
