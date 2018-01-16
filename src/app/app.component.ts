import { Component } from '@angular/core';
import { Router } from '@angular/router';


import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import 'clarity-icons/shapes/commerce-shapes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSelected = false;

  Select(boo){
  boo = !boo;
  return boo;
  }
}
