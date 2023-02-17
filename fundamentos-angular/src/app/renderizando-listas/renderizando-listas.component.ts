import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] =[
    {id: 1, nome: "Celular Xiaomi", descricao: "Celular pequeno", esgotado: false},
    {id: 2, nome: "Celular Motorola", esgotado: false},
    {id:3, nome: "Celular Xiaomi", descricao: "Celular pequeno", esgotado: true}
  ]

}
