import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  private authenticated = false;

  constructor(private localStorageService: LocalStorageService) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.users = this.localStorageService.getItem('users') || [];
  }

  register(user: any): boolean {
    if (this.isUsernameTaken(user.username)) {
      alert('Username already taken!');
      return false;
    }

    this.users.push(user);
    this.localStorageService.setItem('users', this.users);
    alert('User registered successfully!');
    return true;
  }

  private isUsernameTaken(username: string): boolean {
    return this.users.some(u => u.username === username);
  }

  login(username: string, password: string): boolean {
    const user = this.findUserByUsernameAndPassword(username, password);
    
    if (user) {
      this.localStorageService.setItem('currentUser', user);
      this.authenticated = true;
      return true;
    }
    
    alert('Invalid username or password!');
    return false;
  }

  private findUserByUsernameAndPassword(username: string, password: string): any {
    return this.users.find(u => u.username === username && u.password === password);
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  isAuthenticated():boolean {
  return this.authenticated;
  }
  logout(): void {
    this.localStorageService.removeItem('currentUser');
    this.authenticated = false;
    alert('Logged out!');
  }

  getCurrentUser(): string {
    const user = this.localStorageService.getItem('currentUser');
    return user.username ? user.username.toUpperCase() : '';
  }
    
}
