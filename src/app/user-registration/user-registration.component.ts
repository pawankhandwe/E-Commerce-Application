import { Component } from '@angular/core';
import { UserService } from '../user.service'; // Import your UserService

import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  newUser: any = {}; // Object to store registration form data
  registrationError = false; // To show error message if registration fails

  constructor(private userService: UserService, private router: Router ) {} // Inject the UserService

  registerUser(): void {
    // Implement user registration logic
    // You need to call the register method from your UserService here
    // Pass the newUser object with user input to the register method

  const IsRegistered=  this.userService.register(this.newUser); // Example usage
  if(IsRegistered) { 
  
  this.router.navigate(['login']);
  }else
  {
  
  this.router.navigate(['register']);
  }
    // You can handle success and error cases accordingly
    // For example, you can redirect to a different page on success
    // and show an error message on failure
  }

  
}
