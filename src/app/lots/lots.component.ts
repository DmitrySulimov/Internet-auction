import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import 'rxjs/add/operator/map';
import { Lot } from '../domain/lot';
import { LotsService } from '../lots.service';
import * as _ from 'underscore';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent implements OnInit {


  constructor(private lotsService: LotsService,
    private router: Router,  private pagerService: PagerService) { }

  lots: Lot[];
  pager: any = {};
  pagedItems: any[];

  ngOnInit() {
    	this.getLots();
  }

  getLots() : void {
    this.lotsService
    .getLots()
    .subscribe((lots)=> { 
    	this.lots = lots;
      this.setPage(1);
    })
} 
   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.lots.length, page);

        // get current page of items
        this.pagedItems = this.lots.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
