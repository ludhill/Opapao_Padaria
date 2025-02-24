import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  formulario = new FormGroup({
  nome: new FormControl ('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl ('', [Validators.required, Validators.minLength(3)]),
  });


  //Vetor
  vetor:Pessoa[] = [];

  //Função cadastro
  cadastrar() {
    //Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza nos inputs
    this.formulario.reset();

    //Visualização via console
    console.table(this.vetor);

  }




}
