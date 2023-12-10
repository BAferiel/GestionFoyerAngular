import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditing = false;
  isLoggedIn: boolean = true;
  user: User= new User();
  idUser: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.idUser = this.userService.getUser().id;
    this.userService.getUserById(this.idUser).subscribe(
      (data) => {
        this.user = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProfile(){
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        console.log(data);
        
        this.ngOnInit();
        alert("Profile updated successfully");
      },
      (error) => {
        console.log(error);
      }
    );

  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
