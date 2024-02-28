import { Component, inject } from '@angular/core';
import { IProduto } from '../interfaces/produto';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent {
  produtoList:IProduto[]=[];
  produtoService=inject(ProdutoService);
  ngOnInit(){
    this.produtoService.getAllProdutos().subscribe(result => {
      this.produtoList = result;
      console.log(this.produtoList);
    })
  }
}
