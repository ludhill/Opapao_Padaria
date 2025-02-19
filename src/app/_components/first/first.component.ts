import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  //styleUrl: './first.component.css'
  styleUrl: '/ ../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export default class FirstComponent {

  products: any[] = [];

  httpClient = inject(HttpClient);
  
  ngOnInit(){
    this.httpClient.get<any>('/api/products').subscribe((products)=>{
      this.products = products;
    });
  }

  trackByFn(index:number, product:any):any{
    return product.id;
  }
}
