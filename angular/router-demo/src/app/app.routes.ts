import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { PageNotFound } from './page-not-found/page-not-found';
import { CreateProduct } from './create-product/create-product';
import { authGuard } from './auth-guard';
import { checkoutGuard } from './checkout-guard';

export const routes: Routes = [
    {
        // map the url to the component
        // eg: localhost:4200 will be mapped to ProducList component
        path: '', component:ProductList,
        
    },
    {
        // eg: localhost:4200/product will be mappped to ProductDetail component
        path: 'products/:id', component:ProductDetail,
    },
    {
        path: 'cart', component:Cart, canDeactivate: [checkoutGuard]
    },
    {
        path: 'create-product', component:CreateProduct, canActivate: [authGuard]
    },
    {
        path: '**', component:PageNotFound
    }
];
