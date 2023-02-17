export interface Celular{
    id: number;
    nome: string;
    //quando coloco o ponto de interrogacao, estou indicando que esse campo pode ser opcional
    descricao?: string;
    esgotado: boolean;
}