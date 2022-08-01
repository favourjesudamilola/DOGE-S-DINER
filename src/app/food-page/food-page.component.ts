import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/model/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  foodItems: any = localStorage.getItem('items')
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);

    })
  }

  ngOnInit(): void {
      localStorage.setItem('items', this.foodItems)
    //   if (localStorage.getItem('items') === null) {
    //   localStorage.setItem('items', this.foodItems)
    // };
    // this.foodItems = localStorage.getItem('items');
    this.foodItems = JSON.parse(this.foodItems)
    console.log(this.foodItems);

  }

  addItem(){
    console.log(this.food);
    this.foodItems.push(this.food)
    this.foodItems = JSON.stringify(this.foodItems)
    localStorage.setItem('items', this.foodItems)
  }

}
