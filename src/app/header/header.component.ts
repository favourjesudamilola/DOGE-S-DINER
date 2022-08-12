import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Cart;

  constructor( private cartService: CartService ) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }


}
