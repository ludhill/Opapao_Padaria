import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
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