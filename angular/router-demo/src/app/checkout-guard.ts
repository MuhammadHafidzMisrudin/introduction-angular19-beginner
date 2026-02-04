import { CanActivateFn } from '@angular/router';

// where will the guard called? <Cart>
export const checkoutGuard: CanActivateFn = (route, state) => {

  const confirmation = confirm("You have item pendings in your cart. " + 
    "Do you sure want to leave?");

  // true = can leave, false = stay in page
  return true;
};
