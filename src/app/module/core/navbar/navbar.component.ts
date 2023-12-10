import { Component } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router,RouterModule } from '@angular/router';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: User = new User();
  isLoggedIn = false; // Initialize as not logged in

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    // Inject the UserService
    this.isLoggedIn = userService.isAuthenticated();
  }
  login() {
    this.router.navigate(['/login']);
    console.log('User object:', this.user);

  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

