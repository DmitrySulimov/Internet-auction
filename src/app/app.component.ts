import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';


import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import 'clarity-icons/shapes/commerce-shapes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  boo: boolean = false;
  date = moment().format('MM-DD-YYYY');

  constructor() { }

  ngOnInit() {
  }

  select() {
  let mainSection = document.getElementById("mainSection");
  if(this.boo){
    mainSection.classList.add('main');
    mainSection.classList.remove('mainWithSidebar');
  }
  else{
    mainSection.classList.add('mainWithSidebar');
    mainSection.classList.remove('main');
  }
  this.boo = !this.boo;
  return this.boo;
  }
  
  redirectTo() {
  console.log("check is user exist and if exist - redirect to user's chacked role page");
  }
}
