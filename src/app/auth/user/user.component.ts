import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../../domain/user';
import {
  CanActivate, Router, ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthentificationService } from '../../authentification.service';
import { Lot } from '../../domain/lot';
import { LotsService } from '../../lots.service';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  username: string = '';  
  lots : Lot[]
  user : User = {
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


  constructor(private authentificationService: AuthentificationService, private router: Router, private route: ActivatedRoute, private lotsService:  LotsService, private utility: UtilityService) {
  this.username = this.route.snapshot.params['username'];
   }

  ngOnInit() {
  this.getLots();
  this.getUserByName();
  this.utility.isLogged().then((result: boolean) => {
      if(!result){
          this.router.navigate(['/authentification']);
      }
    })
  }

  getUserByName(){
    this.authentificationService.getUserByName(this.username)
      .subscribe((user) => {
      this.user = user[0]
      });
  }

  Update(): void {
   this.authentificationService.updateUser(this.user)
     .subscribe();
 }

   getLots() : void {
    this.lotsService
    .getLots()
    .subscribe((lots)=> { 
    	this.lots = lots.filter(p => p.customer == this.username);
    })
   } 


    deleteLot(lot: Lot): void {
 	 this.lots = this.lots.filter(h => h !== lot);
	 this.lotsService.deleteLot(lot).subscribe();
	}

	showLot() : void{
		this.router.navigate(['/change-lot']);
	}

  out() {
  sessionStorage.clear();
  this.router.navigate(['/authentification']);
  }
}