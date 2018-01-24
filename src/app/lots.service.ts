import { Injectable } from '@angular/core';
import { Lot } from './domain/lot';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


const httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};


@Injectable()
export class LotsService {

 private lotsUrl = 'api/lots';


  constructor(private http: HttpClient) { }


  getLots (): Observable<Lot[]> {
 	 return this.http.get<Lot[]>(this.lotsUrl);
	 };



  addLot (lot: Lot): Observable<Lot> {
	  return this.http.post<Lot>(this.lotsUrl, lot, httpOptions);
	  };



  deleteLot (lot: Lot | number): Observable<Lot> {
  const id = typeof lot === 'number' ? lot : lot.id;
  const url = `${this.lotsUrl}/${id}`;

  return this.http.delete<Lot>(url, httpOptions)
  };
}
