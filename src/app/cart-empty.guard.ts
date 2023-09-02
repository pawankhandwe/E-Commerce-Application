import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CartService } from './cart.service'; // Your cart service

@Injectable({
  providedIn: 'root'
})
export class CartEmptyGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("df");
    
    if (this.cartService.isEmpty()) {
      // Redirect to the cart page if it's empty
      alert("add Atleast One product to cart first !");
      this.router.navigate(['/cart']);
      return false;
    } else {
      return true; // Allow access
    }
  }
}
