import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import {ProductListComponent} from '../product-list/product-list.component'
import { IProduct } from '../product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//  @Input() greetMessage:[string] ;
public items=[];

products: IProduct[] ;

@ViewChild(ProductListComponent)
private productlistComponent: ProductListComponent;
ngAfterViewInit() {

//addToCart(product :IProduct){
  //console.log(product.productName);
  console.log('items');
  //this.productlistComponent.addToCart('products");
}
  constructor()  {
   }
   

   
  ngOnInit() {
    console.log('hai')
  }

}
