import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  foodItems: any
  total:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.foodItems = localStorage.getItem('items');

    this.foodItems = JSON.parse(this.foodItems);
    console.log(this.foodItems);

    if(this.foodItems) this.getTotal(this.foodItems);
  }

  onDelete(i:number){
    this.foodItems.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(this.foodItems));

    this.getTotal(this.foodItems);
  }

  validateInput(event:any, i:number){
    const qty = +event.target.validateInput;
    if(qty < 1) {
      event.target.value = this.foodItems[1].qty
      return;
    }

    this.QtyUpdated(qty, i)

  }


  private QtyUpdated(qty:number, i:number){
    this.foodItems[i].qty = qty;

    localStorage.setItem("items", JSON.stringify(this.foodItems));

    this.getTotal(this.foodItems);
  }





  getTotal(data:any){
    let subs = 0;

    for (const item of data)
      subs += item.price * item.qty;

      this.total = subs;
  }


}
