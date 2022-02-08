import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  baseUrl: string ="http://localhost:8080/userregistration";
  constructor(private httpClient: HttpClient ) { }
 
  loginUser(data: any){
  console.log("login")
 return this.httpClient.post(`${this.baseUrl}/login`,data);
} 

 login(token:string) {
   localStorage.setItem("token",JSON.stringify(token))
 } 
  
}
