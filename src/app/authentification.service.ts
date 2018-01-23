import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './domain/user';

import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

   const httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};


@Injectable()
export class AuthentificationService {

   private usersUrl = 'api/users';
   
  constructor(private http: HttpClient) {
  	
   }


   getUsers (): Observable<User[]> {
 	 return this.http.get<User[]>(this.usersUrl);
	}

   userExisted (username: string): Observable<User> {
     const url = `${this.usersUrl}/${username}`;
 	 return this.http.get<User>(url).filter(x => x.username === username);
	}

	getUser(id: number): Observable<User> {
 	 const url = `${this.usersUrl}/${id}`;
  	 return this.http.get<User>(url);
	}

	updateUser (user: User): Observable<any> {
	  return this.http.put(this.usersUrl, user, httpOptions);
	}

	addUser(user : User): Observable<User>{
		return this.http.post<User>(this.usersUrl, user, httpOptions);
	}
}
