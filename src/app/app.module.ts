import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserLogoutComponent } from './user-logout/user-logout.component';


@NgModule({
  declarations: [
    AppComponent, ProductListingComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    HomeComponent,
    ProductDetailsComponent,
    UserLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [ProductService,CartService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
