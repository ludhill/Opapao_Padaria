import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
  styleUrl: '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class AppComponent {
  title = 'Opapao';
}
