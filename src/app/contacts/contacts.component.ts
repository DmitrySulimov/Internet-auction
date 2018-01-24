import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
	
  lat: number = 37.51939;
  lng: number = -122.212857;
	
  constructor() { }

  ngOnInit() {
  }


}
