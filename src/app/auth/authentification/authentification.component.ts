import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { User } from '../../domain/user';
import { AuthentificationService } from '../../authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  users : User[];
  username: string = "";
  password: string = "";

  constructor(private authentificationService: AuthentificationService,
    private router: Router) {
  	  
  }

  ngOnInit() {
  	this.getUsers();
  }


  getUsers(): void {
    this.authentificationService.getUsers()
    .subscribe(users => this.users = users);
  }


  loggining(){
  for(let user of this.users){
    if(user.username == this.username && user.password == this.password){
      if(user.isAdmin){
        this.router.navigate(['/authentification/admin']);
      }
      else{
        this.router.navigate(['/authentification/user/', this.username ]);
      }
    }
      
  };
}
}