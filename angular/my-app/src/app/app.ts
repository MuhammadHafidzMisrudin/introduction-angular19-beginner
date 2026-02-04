import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Counter } from "./counter/counter";
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Counter, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name: string = "Hafidz";
  age: number = 30;
  location: string = "Shah Alam";
  developer: boolean = true;
  scores: number[] = [70,80,90,100,60];

  protected readonly title = signal('my-app');
}
