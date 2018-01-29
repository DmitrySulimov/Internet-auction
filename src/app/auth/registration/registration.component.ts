import { Component, OnInit } from '@angular/core';

import { User } from '../../domain/user';
import { AuthentificationService } from '../../authentification.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {


  users : User[];
  regUser: User = {
    id: 0,
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    currentBalance: 0
  };

  constructor(private authentificationService: AuthentificationService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }


   getUsers(): void {
    this.authentificationService.getUsers()
    .subscribe(users => this.users = users);
  }

  addUser(regUser) : void{

  this.authentificationService.addUser(this.regUser as User)
  		.subscribe(user => {
  			   this.users.push(user);
      })
      this.router.navigate(['/authentification']);
  	}
  }
