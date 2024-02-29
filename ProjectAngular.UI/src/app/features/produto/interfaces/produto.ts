import { DecimalPipe } from "@angular/common";
export interface IProduto{
    id: number;
    descricao: string;
    categoria: number;
    valor: DecimalPipe;
}