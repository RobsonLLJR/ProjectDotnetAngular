import { DecimalPipe } from "@angular/common";
export interface IProduto{
    id: number;
    categoria: number;
    valor: DecimalPipe;
    descricao: string;
}