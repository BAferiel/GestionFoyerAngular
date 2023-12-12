import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string='';
  password: string='';
  protected aFormGroup: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  siteKey:string="6LcnRC4pAAAAACHQBIzhHGzwDod7o6sxckYECA6S"
  login() {
    this.userService.login(this.name, this.password).subscribe(
      (response: any) => {
        console.log('Login successful:', response);

        //set the token in the cookies
        this.userService.setToken(response.token);
        const user = this.userService.getUser();
        if(user.roles == 'ROLE_ADMIN'){
          this.router.navigate(['/admin/users']);
        }else{
          
        this.router.navigate(['/welcome']);
        }

      },
      (error: any) => {
        console.error('Login failed:', error);
        console.error('Error status:', error.status);
        console.error('Error body:', error.error);
        // Handle the error or display an appropriate error message
      }
    );
  }
}
