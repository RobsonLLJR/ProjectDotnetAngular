import { Component, inject } from '@angular/core';
import { AddProdutoRequest } from '../models/add-produto-request.model';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-add-produto',
  standalone: true,
  imports: [],
  templateUrl: './add-produto.component.html',
  styleUrl: './add-produto.component.css'
})
export class AddProdutoComponent {
  produtoService=inject(ProdutoService);
  model: AddProdutoRequest;
  constructor(){
    this.model = {
      categoria: '',
      descricao: '',
      valor: 0
    };
  }
  onFormSubmit(){
    console.log(this.model);
  }


  categoriaSelected: any;
  options: { value: unknown, label: string, inactive: boolean} [] = [
    {
      value: 0,
      label: "Televisão",
      inactive: false
    },
    {
      value: 1,
      label: "Celular",
      inactive: false
    },
    {
      value: 2,
      label: "Eletrodoméstico",
      inactive: false
    }
  ]
  ngOnInit(): void{
    this.categoriaSelected = this.options;
  }

  validateDecimal(event:any){
    var t = event.target.value;
    event.target.value = t.replace(/[^\d.]/g, '');
  }
}
