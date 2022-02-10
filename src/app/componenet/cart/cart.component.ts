import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartList: any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCarts().subscribe(res=>{
      this.cartList=res;
      console.log(res);
    })
  }
 
  
}


