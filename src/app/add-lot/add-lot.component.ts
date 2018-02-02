import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/Rx';
import { Lot } from '../domain/lot';
import { LotsService } from '../lots.service'

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {

  constructor(private lotsService: LotsService, private router: Router) { }

  ngOnInit() {
  this.getLots();
  }

   getLots() : void {
    this.lotsService
    .getLots()
    .subscribe((lots)=> { 
    	this.lots = lots;
    })
   } 

  lots: Lot[];
  emptyLot: Lot = {
	id: 22,
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

  add(emptyLot){
  	   this.emptyLot.id++;
 		 this.lotsService.addLot(this.emptyLot as Lot)
  		.subscribe((lot) => {
  			   this.lots.push(lot);
  			   this.emptyLot;
  			   this.router.navigate(['/authentification']);
      });   

    }
}
