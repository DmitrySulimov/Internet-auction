import { Component, OnInit } from '@angular/core';
import { Lot } from '../domain/lot';
import { LotsService } from '../lots.service';
import {
  CanActivate, Router, ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

@Component({
  selector: 'app-change-lot',
  templateUrl: './change-lot.component.html',
  styleUrls: ['./change-lot.component.css']
})


export class ChangeLotComponent implements OnInit {

  id: number = 0;

  lot: Lot = {
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

  constructor(private lotsService: LotsService, private router: Router, private route: ActivatedRoute) {
  	this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  this.getLot();
  }

  getLot() : void{
  	console.log(this.id);
  	this.lotsService.getLot(this.id).
  	subscribe((lot) =>{
  	this.lot = lot
  	});
  }


  Update(): void {
   this.lotsService.updateLot(this.lot)
     .subscribe();
    this.router.navigate(['/authentification']);
 }

}
