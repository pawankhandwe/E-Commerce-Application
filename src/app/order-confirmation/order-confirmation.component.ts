import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  cartItems: any[] = [];
  shippingForm: FormGroup;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    // Initialize the shippingForm with validation rules
    this.shippingForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      creditCardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['',[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/), ]],
      cvv: ['',[  Validators.required, Validators.pattern(/^\d{3}$/) ,]],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      // Form is valid, you can proceed with order placement
      // Access form values using this.shippingForm.value
    } else {
      // Form is invalid, handle validation errors
    }
  }
}
