import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
console.log("ListUserComponent");

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  user: User = new User();
  isLoggedIn = false;
  userLists: User[] = [];

  constructor(
    private userService: UserService,
    private router:Router
  ) {
    // Inject the UserService
    this.isLoggedIn = userService.isAuthenticated();

  }

  ngOnInit(): void {
    this.reloadData();
  }

  editUser(id: number) {
    this.router.navigate(['admin/editUser', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  reloadData() {
    this.userService.getUsersList().subscribe(
      (response) => {
        this.userLists = (response as { data: User[] }).data.map((r) => {
          const user = new User();
          user.id = r.id;
          user.name = r.name;
          user.email = r.email;
          user.password = r.password;
          user.cin = r.cin;
          user.roles = r.roles;
          user.prenomEt = r.prenomEt;
          user.ecole = r.ecole;
          user.dataNaissance = r.dataNaissance;
          return user;
        });
        console.log(this.userLists);
      },
      (error) => console.error(error)
    );
  }
}
