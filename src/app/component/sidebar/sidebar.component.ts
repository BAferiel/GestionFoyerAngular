import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
