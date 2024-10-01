import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';
// import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm:string = "";
  //foods:Food[] = [];
  foods: any[] = [];
  isAuthenticated:string = 'false';
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }


  getFood(): void {
   //this.foodService.getFoodApi().subscribe(food => this.foods = food);
  }
  

  //to change the food:from string we import from shared model
  ngOnInit() {
    this.getFood();

    console.log(this.foods);
    //anytime the searched parameter changes a new parameter is
    this.route.params.subscribe(params => {
    if(params['searchTerm'])
    this.foods = this.foodService.getAll().filter(food =>
    food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
    else
    this.foods = this.foodService.getAll()
    })
    localStorage.setItem('isAuthenticated', this.isAuthenticated)
  }

}
