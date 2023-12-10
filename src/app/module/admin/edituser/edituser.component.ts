import { User } from 'src/app/models/user.model';
import { UserService } from './../../../user.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  isEditing = false;
  isLoggedIn: boolean = true;
  user: User = new User();
  userId: any;
  

  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          this.user = data.data;
          
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  updateProfile() {
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        alert('User updated successfully');
        this.router.navigate(['/admin/users']);

      },
      (error) => {
        console.log(error);
      }
    );

  }

}
