// product-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Update the path
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  productFilterForm: FormGroup;
  searchQuery: string = '';
  categories: string[] = ["men's clothing","jewelery","women's clothing"];
  products: any[] = []; // Replace with your product data
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
    this.productFilterForm = new FormGroup({
      searchQuery: new FormControl(''),
      category: new FormControl(''),
      sortBy: new FormControl('') // Default sorting order to ascending
    });
  }
  

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
    this.filteredProducts = this.products;


}

  addToCart(product: any): void {

    this.cartService.addToCart(product);
  }
 


  sortProducts() {
    const sortByControl = this.productFilterForm.get('sortBy');
    console.log(sortByControl);
      
    const sortBy = sortByControl ? sortByControl.value : '';
      
    if (sortBy === 'priceAsc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
  

  filterProducts() {
    const categoryControl = this.productFilterForm.get('category');
    const category = categoryControl ? categoryControl.value : '';
  
    if (category) {
      this.filteredProducts = this.products.filter(product => product.category === category);
    } else {
      this.filteredProducts = this.products;
    }
  }

  OnSearch() {
    const searchControl  = this.productFilterForm.get('searchQuery');
    
    const searchQuery = searchControl ? searchControl.value.toLowerCase() : '';
  console.log(searchQuery);
  
    this.filteredProducts = this.products.filter(product => {
      console.log(product.title);
      
      return product.title.toLowerCase().includes(searchQuery);
    });
  
    this.sortProducts();
  }
  

  onFormChange() {

    this.filterProducts();
    this.sortProducts();
  }

  navigateToProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }


}

