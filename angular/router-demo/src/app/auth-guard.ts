import { inject } from '@angular/core';
import { runEffect } from '@angular/core/primitives/signals';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  // retrieve the token from local storage
  const isLoggedIn = localStorage.getItem('token');

  // if token exists
  if (isLoggedIn) {
    // allow the user to go to the page
    // in reality we check if the token is valid or not
    return true;
  }

  alert("not authorized");

  // redirect to home page
  return router.parseUrl('/');
};
