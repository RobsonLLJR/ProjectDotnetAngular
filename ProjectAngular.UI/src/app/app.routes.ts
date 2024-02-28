import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ProdutoListComponent } from './features/produto/produto-list/produto-list.component';
import { HttpClient } from '@angular/common/http';
NgModule({
    declarations: [NavbarComponent],
    imports:[
        HttpClient
    ]
})

export const routes: Routes = [
    {
        path: 'produtos',
        component: ProdutoListComponent
    }
];