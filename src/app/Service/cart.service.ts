import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: string ="http://localhost:8082/cart";
  constructor(private http : HttpClient) { } 
  getAllCarts(){
    return this.http.get<any>(`${this.baseUrl}/getAllCart`,{headers: new HttpHeaders({token: localStorage['token']})});
  }
}