import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IProduto } from '../interfaces/produto';
import { AddProdutoRequest } from '../models/add-produto-request.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl= "https://localhost:44315";
  http=inject(HttpClient)
  constructor() { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllProdutos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.apiUrl+"/api/Produto/Get")
    .pipe(retry(2), catchError(this.handleError))
  }

  addProduto(addProdutoDto: AddProdutoRequest){
    return this.http.post(this.apiUrl+"/api/Produto", addProdutoDto);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
