import { Injectable } from '@angular/core';
import { ProductDao } from '../models/product-dao';

@Injectable({
  providedIn: 'root'
})

export class Product {
  products: ProductDao[] = [{
    id: 1,
    name: "iPhone 17 Pro 236GB",
    price: 6999
  }, {
    id: 2,
    name: "iPhone 17 Pro 512GB",
    price: 7999
  }, {
    id: 3,
    name: "Xiaomi 15 Pro",
    price: 5699
  }, {
    id: 4,
    name: "Samsung A23",
    price: 5699
  }];


  // return all products
  getProducts = () => {
    return this.products;
  }

  // add new product to all products
  addProduct = (product:ProductDao) => {
    // to fix bug if the products.length is empty when delete products
    const currentId = this.products.length === 0 ? 1 : this.products[this.products.length-1].id + 1;

    this.products = [...this.products, {...product, id: currentId}];
  }

  removeProduct = (id: number) => {
    // filter products to remove current product by id
    this.products = this.products.filter(val => val.id !== id);
  }

  getProductById = (id: number) => {
    // similart to filter nut will return 1 result
    return this.products.find(val => val.id === id);
  }
}
