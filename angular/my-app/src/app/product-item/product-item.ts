import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { UpperCasePipe, CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-product-item',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})

export class ProductItem {
  // non nullable because no default value
  @Input() currentProduct!: Product;

  @Output() deleteItem = new EventEmitter<number>();

  deleteItemPressed = () => {
    this.deleteItem.emit(this.currentProduct.id);
  }
}
