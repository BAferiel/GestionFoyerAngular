import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

console.log("WelcomeComponent");

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  user: User = new User();
  isLoggedIn = false; // Initialize as not logged in

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    // Inject the UserService
    this.isLoggedIn = userService.isAuthenticated();
    
  }
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userService.getUserById(this.user.id).subscribe(
      (data) => {
        this.user = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
