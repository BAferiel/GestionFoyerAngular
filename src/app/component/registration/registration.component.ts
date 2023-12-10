// registration.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = new User();
  registrationSuccess: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    this.userService.registerUser(this.user)
      .subscribe(
        (data) => {
          console.log(data);
          this.registrationSuccess = true;
          this.user = new User(); // Reset the form fields
          this.goToLogin();
        },
        (error) => {
          if (error.status === 200) {
            this.registrationSuccess = true;
            this.user = new User(); // Reset the form fields
            this.goToLogin();
          }
        }
      );
  }
  showSuccessAlert() {
    alert('Registration successful!');
  }
  // New method to navigate to the login page
  goToLogin() {
    console.log('goToLogin method called');
    this.router.navigate(['/login']);
  }
}
