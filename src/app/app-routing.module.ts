import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CartComponent} from './componenet/cart/cart.component'
import{LoginPageComponent} from './componenet/login-page/login-page.component';
import { OrderComponent } from './componenet/order/order.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'cart',component:CartComponent},
{path:'order',component:OrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
