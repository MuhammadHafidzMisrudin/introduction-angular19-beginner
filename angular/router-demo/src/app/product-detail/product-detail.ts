import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // to retrieve the passed id, use ActivatedRoute service
import { ProductDao } from '../models/product-dao';
import { Product } from '../services/product';
import { ProductApiDTO } from '../models/product-api-dto';
import { ProductApi } from '../services/product-api';
import { UpperCasePipe, CurrencyPipe } from "@angular/common";


@Component({
  selector: 'app-product-detail',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  id: number = 0;
  
  // this is for local/mock
  // product: ProductDao | undefined = undefined;

  // this is for API data
  product: ProductApiDTO | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productService: Product, private productApiService: ProductApi) {
  }

  ngOnInit(): void {
    // pass value id to ui
    // this.activatedRoute.snapshot.params['id'], get id from string URL
    // parseInt = to transform string into number, pass it to the service
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    // retrieve data from query params
    const sortOrder = this.activatedRoute.snapshot.queryParamMap.get('sortOrder');
    const limit = this.activatedRoute.snapshot.queryParamMap.get('limit');

    console.log(sortOrder);
    console.log(limit);

    // this is for local
    // set and get product by id from URL
    // this.product = this.productService.getProductById(this.id);

    // this data is from API
    this.productApiService.getProductById(this.id).subscribe({
      next: (data) => this.product = data,
      error: (error) => console.log(error)
    });
  }
}
