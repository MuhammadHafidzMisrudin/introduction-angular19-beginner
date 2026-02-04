import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../services/product-api';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
  title: string = "";
  price: number = 0;
  description: string = "";
  
  constructor(private productApiService: ProductApi) {
    
  }

  addProductPressed = () => {
    this.productApiService.addProduct(this.title, this.price, this.description)
      .subscribe({
        next: (data) => {
          console.log(data);
          alert("successful added!");
        },
        error: (error) => {
          console.log(error);
          alert("error occurred!" + error.message);
        }
      });
  }
}
