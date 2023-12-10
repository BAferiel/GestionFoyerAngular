import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
	providedIn: 'root',
})
export class UserService {
	private token!: string;

	constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

	registerUser(user: User): Observable<User> {
		return this.http.post<User>(
			'http://localhost:8080/auth/register',
			user
		);
	}

	getUser(){
		const token = this.getToken();
		const user = new User();
		const decryptedToken = this.jwtHelper.decodeToken(token)['sub'].split(",");
	
		user.id = decryptedToken[0].split("=")[1].split();
		user.cin = decryptedToken[6].split("=")[1];
		user.name = decryptedToken[1].split("=")[1];
		user.prenomEt = decryptedToken[5].split("=")[1];
		user.email = decryptedToken[2].split("=")[1];
		user.dataNaissance = decryptedToken[8].split("=")[1];
		user.ecole = decryptedToken[7].split("=")[1];
		user.roles = decryptedToken[4].split("=")[1];
		user.password = decryptedToken[3].split("=")[1];

		return user;
	}

	login(username: string, password: string) {
		const authRequest = { username, password };
		return this.http.post(
			'http://localhost:8080/auth/login',
			authRequest,
			{ responseType: 'json' }
		);
	}
	setToken(token: string): void {
		this.token = token;
		localStorage.setItem('token', token);
	}
	getToken(): string {
		if (!this.token) {
			this.token = localStorage.getItem('token')??'';
		}
		return this.token;
	}

	logout(): void {
		this.token = '';
		localStorage.removeItem('token');
	}

	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	getUsersList(): Observable<any> {
		const usersEndpoint = 'http://localhost:8080/api/user/get-all';
		return this.http.post<any>(usersEndpoint,{"token":this.token},{ responseType: 'json' });
	}

	getUserById(id: number): Observable<any> {
		const userEndpoint = 'http://localhost:8080/api/user/get/' + id;
		return this.http.post<any>(userEndpoint,{"token":this.token},{ responseType: 'json' });
	}

	updateUser(user: User): Observable<User> {
		const updateProfileEndpoint = 'http://localhost:8080/api/user/update/' + user.id;
		const payload = {
			"token":this.token,
			"cin":user.cin,
			"name":user.name,
			"prenomEt":user.prenomEt,
			"email":user.email,
			"dataNaissance":user.dataNaissance,
			"ecole":user.ecole,
			"roles":user.roles,
		}
		return this.http.post<User>(updateProfileEndpoint,payload,{ responseType: 'json' });
	}

	deleteUser(id: number): Observable<any> {
		const deleteProfileEndpoint = 'http://localhost:8080/api/user/delete/' + id;
		return this.http.post(deleteProfileEndpoint,{"token":this.token},{ responseType: 'json' });
	}

}
