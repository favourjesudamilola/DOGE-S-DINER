import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  foods:Food[] = [];

  constructor( private foodService:FoodService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();

  }

}
