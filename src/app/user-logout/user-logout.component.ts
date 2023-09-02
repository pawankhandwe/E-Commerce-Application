import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent {
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // Perform logout logic, e.g., clear authentication token, user data, etc.
    this.userService.logout(); // Implement this method in your UserService

    this.router.navigate(['/login']);
  }
}
