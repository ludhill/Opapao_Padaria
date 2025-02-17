import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, HomeComponent],
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class AppComponent {
  title = 'Opapao';
}
