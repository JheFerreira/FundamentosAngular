import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Jéssica";
  dataNascimento = "1982-03-06";
  urlImagem = "/assets/paz.jpg";
  
  mostrarDataNascimento(){
    alert(`A data de nascimento da Jéssica  é: ${this.dataNascimento}`)
  }
  

}
