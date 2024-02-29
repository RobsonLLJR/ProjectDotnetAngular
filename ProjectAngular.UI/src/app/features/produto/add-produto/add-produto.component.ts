import { Component, inject } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProdutoRequest } from '../models/add-produto-request.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-produto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-produto.component.html',
  styleUrl: './add-produto.component.css'
})
export class AddProdutoComponent {
  produtoService=inject(ProdutoService);
  router=inject(Router);
  formBuilder=inject(FormBuilder);
  produto = this.formBuilder.group({
    categoria: ['', Validators.required],
    descricao: ['', [Validators.required]],
    valor: ['', [Validators.required]]
  });
  constructor(){ }

  onFormSubmit(){
    const addProduto :AddProdutoRequest={
      categoria: this.produto.value.categoria!,
      descricao: this.produto.value.descricao!,
      valor: this.produto.value.valor!
    }
    this.produtoService.addProduto(addProduto).subscribe(() =>{
      console.log("Sucesso");
      this.router.navigateByUrl("/produtos");
    });
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
