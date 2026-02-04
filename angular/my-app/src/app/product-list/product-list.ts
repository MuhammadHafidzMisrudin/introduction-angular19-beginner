import { Component } from '@angular/core';
import { CreateProduct } from "../create-product/create-product";
import { ProductItem } from "../product-item/product-item";
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [CreateProduct, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {
  products: Product[] = [{
    id: 1,
    name: "iPhone 17 Pro 236",
    price: 6999
  }, {
    id: 2,
    name: "iPhone 17 Pro 512",
    price: 7999
  }, {
    id: 3,
    name: "Xiaomi 15",
    price: 5699
  }];

  onAddNewProduct = (newProduct: Product) => {
    const currentId = this.products.length === 0 ? 1 : this.products[this.products.length-1].id + 1;
    newProduct = {...newProduct, id: currentId};

    // return the products with added new product
    this.products = [...this.products, newProduct];
  }

  onDeleteProduct = (id: number) => {
    // return all the products that the id is different thant the given id
    this.products = this.products.filter(val => val!.id != id);
  }
}
