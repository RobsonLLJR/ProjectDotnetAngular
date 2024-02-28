import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ProdutoListComponent } from './features/produto/produto-list/produto-list.component';
import { HttpClient } from '@angular/common/http';
import { AddProdutoComponent } from './features/produto/add-produto/add-produto.component';
import { FormsModule } from '@angular/forms';
NgModule({
    declarations: [NavbarComponent],
    imports:[
        HttpClient,
        FormsModule
    ]
})

export const routes: Routes = [
    {
        path: 'produtos',
        component: ProdutoListComponent
    },
    {
        path: 'produto/add',
        component: AddProdutoComponent
    }
];