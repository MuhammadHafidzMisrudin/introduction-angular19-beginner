// import Output and EventEmitter to pass data to parent
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})

export class CreateProduct {
  // property to be linked to the input using ngModel
  // ngModel is a 2 way data binding linking the input field to the property in .ts
  // [(xxx)] is 2 way data binding 
  // (xxx) is event binding
  // [xxx] is property binding
  name: string = "";
  price: number = 0;

  // An EventEmitter that will pass up Product to the Parent
  @Output() addNewProduct = new EventEmitter<Product>()

  addProduct = () => {
    alert(`Product name, ${this.name} and price, ${this.price}`);
    const newProduct: Product = {id: 0, name: this.name, price: this.price};

    // pass up the product to parent
    this.addNewProduct.emit(newProduct);

    // reset the form after submit
    this.name = "" ;
    this.price = 0;
  }
}
