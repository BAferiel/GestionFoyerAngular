import { Component } from '@angular/core';
import {User} from "../../../models/user.model";
import {UserService} from "../../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent {
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
