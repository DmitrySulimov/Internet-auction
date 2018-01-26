import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/add/operator/map';

import { Lot } from '../domain/lot';
import { LotsService } from '../lots.service';



@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent implements OnInit {

 lots: Lot[];


  constructor(private lotsService: LotsService,
    private router: Router) { }

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
}
