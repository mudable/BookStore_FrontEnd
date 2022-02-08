import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../model/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookStoreServiceService {
  baseUrl: string ="http://localhost:8080/book";

  constructor(private http : HttpClient) { } 
  getAllBooks(){
    return this.http.get<any>(`http://localhost:8080/book/getbooks`,{headers: new HttpHeaders({token: localStorage['token']})});
  }
}