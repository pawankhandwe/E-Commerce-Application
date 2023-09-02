// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  shippingDetails: any = { name: '', address: '' }; // Add other shipping fields

  constructor(private cartService: CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  placeOrder(): void {
    // Implement order placement logic
    console.log('Order placed!', this.shippingDetails, this.cartItems);
  
    this.cartService.clearCart();
    alert('Order Placed Sucessfully!')
    this.router.navigate(['/order-confirmation']);
  }


}