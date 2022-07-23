import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  // @Input()
  // justify

  constructor() { }

  ngOnInit(): void {
  }

}
