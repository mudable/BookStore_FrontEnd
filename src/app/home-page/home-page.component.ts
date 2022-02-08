import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookStoreServiceService } from '../Service/book-store-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  bookList:any;
 // totalBooks:number | undefined;
  constructor(private bookService: BookStoreServiceService, private router : Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(res=>{
      this.bookList=res;
    })
  }
}
