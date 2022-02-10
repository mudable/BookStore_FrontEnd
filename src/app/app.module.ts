import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './componenet/login-page/login-page.component';
import{ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './componenet/cart/cart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderComponent } from './componenet/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    CartComponent,
    OrderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
     ReactiveFormsModule,
     MatDividerModule,
     MatInputModule,
     MatDatepickerModule,FlexLayoutModule,
     FormsModule,MatRadioModule,
     BrowserAnimationsModule,MatExpansionModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
