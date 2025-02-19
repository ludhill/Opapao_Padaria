import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsComponent } from "../../_components/forms/forms.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsComponent],
  templateUrl: './home.component.html',
  //styleUrl: './home.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class HomeComponent {

}
