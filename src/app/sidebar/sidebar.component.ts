import { Component, OnInit } from '@angular/core';
import { LotsService } from '../lots.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { Lot } from '../domain/lot';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private lotsService : LotsService, private router: Router) { }

  ngOnInit() {
 	this.getLots();
  }

  lots: Lot[];

  getLots() : void {
    this.lotsService
    .getLots()
    .subscribe((lots)=> { 
    	this.lots = lots;
  	  })
    };


}
