import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginData: any = {};
  loginError = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private router: Router // Inject Router
  ) {}

  loginUser(): void {
    const { username, password } = this.loginData;
    if (this.userService.login(username, password)) {
      // Redirect to the return URL or a default route
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
      
      alert('Login Sucessfully Done !');
      this.router.navigate(['home']);

    } else {
      this.loginError = true;
      alert('invalid username or password !');
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
