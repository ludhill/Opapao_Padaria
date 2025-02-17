import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  //styleUrl: './forms.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class FormsComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';

  cadastrar() {
    // Lógica de cadastro aqui, se necessário
    alert('Cadastro realizado com sucesso!');
  }
}