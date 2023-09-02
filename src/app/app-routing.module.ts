import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app-routing.module.ts
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

import { CartEmptyGuard } from './cart-empty.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'products', component: ProductListingComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'cart', component: CartComponent },
{
  path: 'checkout',
  component: CheckoutComponent,
  canActivate: [AuthGuard, CartEmptyGuard] // Protect with both guards
},
{ path: 'order-confirmation', component: OrderConfirmationComponent },
{ path: 'login', component: UserLoginComponent  },
{ path: 'register', component: UserRegistrationComponent },
{path:'logout',component:UserLogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
