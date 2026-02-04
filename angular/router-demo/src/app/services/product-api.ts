import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductApiDTO } from '../models/product-api-dto';


@Injectable({
  providedIn: 'root'
})

export class ProductApi {
  private productUrl = "https://fakestoreapi.com/products";
  constructor(private httpClient: HttpClient){
  }

  // get all products from API
  getAllProducts = () => {
    // <> the return type is Array of ProductApiDTO
    return this.httpClient.get<ProductApiDTO[]>(this.productUrl);
  }

  // get product by id
  getProductById = (id: number) => {
    // <> the return type single value of ProductApiDTO
    return this.httpClient.get<ProductApiDTO>(`${this.productUrl}/${id}`);
  }

  addProduct = (title: string, price: number, description: string) => {
    const dataToServer = {
      "title": title,
      "price": price,
      "description": description,
      "category": "mock cat",
      "image": "https://www.dreamstime.com/"
    }

    return this.httpClient.post(this.productUrl, dataToServer);
  }
}
