import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { User } from '../../domain/user';
import { AuthentificationService } from '../../authentification.service';
import { UtilityService } from '../../utility.service';

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
    private router: Router, private utility: UtilityService) {
  	  
  }

  ngOnInit() {
  	this.getUsers();
    this.utility.isLogged().then((result: boolean) => {
      if(result){
        if(sessionStorage.getItem('User') === 'admin'){
          this.router.navigate(['/authentification/admin']);
        }
        else{
          this.router.navigate(['/authentification/user/', sessionStorage.getItem('User')]);
        }
      }
    })
  }


  getUsers(): void {
    this.authentificationService.getUsers()
    .subscribe(users => this.users = users);
  }


  loggining(){
  for(let user of this.users){
    if(user.username == this.username && user.password == this.password){
      if(typeof (Storage) !== 'undefined'){
        sessionStorage.setItem('User', this.username);
        if(user.isAdmin){
          this.router.navigate(['/authentification/admin']);
        }
        else{
          this.router.navigate(['/authentification/user/', this.username ]);
        }
      }
    }    
  }
}
}