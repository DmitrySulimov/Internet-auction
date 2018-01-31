import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/Rx';
import { AuthentificationService } from '../../authentification.service';

import { Lot } from '../../domain/lot';
import { LotsService } from '../../lots.service';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  lots: Lot[];
  users : User[];
  newUser: User = {
    id: 4,
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    currentBalance: 0
  };

  emptyLot: Lot = {
	id: 0,
	name: "",
	currentPrice: 0,
	startPrice: 0,
	lastPrice: 0,
	img: [],
	customer: "",
	totalCustomers: 0,
	finishDate: 0,
	category: "",
	subCategory: "",
	description: ""
  };

  constructor(private authentificationService: AuthentificationService, private lotsService: LotsService, private router: Router, private utility: UtilityService) {}

  ngOnInit() {
    this.getUsers();
    this.getLots();
    this.utility.isLogged().then((result: boolean) => {
      if(!result){
          this.router.navigate(['/authentification']);
      }
    })
  }


   getUsers(): void {
    this.authentificationService.getUsers()
    .subscribe(users => this.users = users);
  }

   addUser(newUser) : void{
   this.newUser.id++;
   this.authentificationService.addUser(this.newUser as User)
  		.subscribe(user => {
  			   this.users.push(user);
  			   this.newUser;
      })
  	}

  	deleteUser(user: User): void {
 	 this.users = this.users.filter(h => h !== user);
	 this.authentificationService.deleteUser(user).subscribe();
	}

  getLots() : void {
    this.lotsService
    .getLots()
    .subscribe((lots)=> { 
    	this.lots = lots;
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
