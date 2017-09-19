import { Component,ViewChild,OnInit} from '@angular/core';
import{ProductService}from'../product/product.service';
import { IProduct } from '../product';
import { CheckoutComponent } from '../checkout/checkout.component';
import{CartComponent} from'../cart/cart.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {
title:string='LIST OF PRODUCTS';
imageWidth:number=100;
imageMargin:number=1;
errorMessage:string;


public items=[];

products: IProduct[] ;


@ViewChild(CartComponent)
private cartComponent: CartComponent;

addToCart(product :IProduct){
 console.log(product.productName);
 this.items.push(product);



}

@ViewChild(CheckoutComponent)
private checkoutComponent: CheckoutComponent;


checkForSession(){
  this.checkoutComponent.put();
 this.checkoutComponent.getCookie();
}
 

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(products=>this.products=products,
         error => this.errorMessage = <any>error);
  }

}
