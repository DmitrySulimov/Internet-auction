import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/add/operator/map';

import { Lot } from '../domain/lot';
import { LotsService } from '../lots.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	
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
    	this.lots = (lots as Lot[]).sort((objA, objB) => objB.totalCustomers - objA.totalCustomers).slice(0,9);
    })
} 
}