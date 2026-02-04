import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router"; // dependency injection

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
  // dependency injection - inject
  constructor(private router: Router) {
  }

  // dependency injection - implement
  backToHome = () => {
    this.router.navigate(["/"]);
  }
}
