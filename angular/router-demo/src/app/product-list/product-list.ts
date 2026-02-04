import { Component, OnInit } from '@angular/core';
import { Product } from "../services/product";
import { ProductDao } from "../models/product-dao";
import { RouterLink } from '@angular/router'
import { UpperCasePipe, CurrencyPipe } from "@angular/common";
import { ProductApi } from '../services/product-api';
import { ProductApiDTO } from '../models/product-api-dto';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, UpperCasePipe, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList implements OnInit {
  //  this is for local/mock data
  // products: ProductDao[] = [];

  // this is for API data
  products: ProductApiDTO[] = [];

  constructor(private productService: Product, private productApiService: ProductApi) {
  }

  ngOnInit(): void {
    // this is using mock data
    // this.products = this.productService.getProducts();
    
    // this is using API
    // get the data from API
    this.productApiService.getAllProducts().subscribe({
      // if successful store the data in this.products
      next: (data) => this.products = data,
      // if it is an error
      error: (error) => console.log(error)
    });
  }
}
