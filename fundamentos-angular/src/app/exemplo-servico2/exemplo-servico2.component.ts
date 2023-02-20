import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  descricao = "";

  adicionarProduto(){
    console.log('O nome do produto ${this.descricao} foi adicionado');
  }

}
