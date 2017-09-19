import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 

  constructor(private _cookieService:CookieService)  {
   }
   put(): void{
     this._cookieService.put("key","100");
   }

    
    
    getCookie():void{
     
    console.log(this._cookieService.get("key"));
      
    }

    
  ngOnInit() {
  }

}
