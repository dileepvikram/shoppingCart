import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpModule} from '@angular/http';
import { CheckoutComponent } from './checkout/checkout.component';
import{RouterModule}from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([ {
      path:'app-product-list',
      component:ProductListComponent
    },
    {
      path:'app-cart',
      component:CartComponent
    }
  ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
