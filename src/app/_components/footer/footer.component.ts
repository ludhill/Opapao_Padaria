import { Component,input,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  //styleUrl: './footer.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class FooterComponent {

}
