import { TagCloseToken } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
// import { count } from 'console';
import { Food } from '../shared/model/Food';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }

  getAllTag():Tag[]{
    return[
      {name: 'All', count: 6},
      {name: 'Fries', count: 1},
      {name: 'Cakes', count: 2},
      {name: 'Chicken', count: 2},
      {name: 'Pasta', count: 1},
    ];
  }

  //returns food based on tag selected
  //if tag is all returns all foods in the food service else get foodtag selected with getAll
  getAllFoodByTag(tag: string): Food[]{
    return tag == 'All' ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Crunchy chicken wings',
        cookTime: '30-40',
        price:35,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.3,
        imageUrl: '/assets/foodimg/airfrywings2.jpg',
        tags: ['FastFood'],

      },
      {
        id: 2,
        name: 'Chocolate Cake Slice',
        cookTime: '10-20',
        price:45,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.3,
        imageUrl: '/assets/foodimg/chocolatesclice2.jpg',
        tags: ['Pastry Slice'],
      },
      {
        id: 3,
        name: 'FruitCake',
        cookTime: '20-45',
        price:45,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.5,
        imageUrl: '/assets/foodimg/fruitcake.jpeg',
        tags: ['Pastry Slice'],
      },
      {
        id: 4,
        name: 'Fried chicken',
        cookTime: '15-20',
        price:500,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:4.0,
        imageUrl: '/assets/foodimg/chickenbreast.jpeg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Stir-fry Pasta',
        cookTime: '15-30',
        price:35,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.0,
        imageUrl: '/assets/foodimg/pasta2.jpg',
        tags: ['FastFood'],
      },
      {
        id: 6,
        name: 'Fries',
        cookTime: '10-20',
        price:300,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.5,
        imageUrl: '/assets/foodimg/frenchfries2.jpg',
        tags: ['FastFood'],
      },
      {
        id: 7,
        name: 'Fries',
        cookTime: '10-20',
        price:300,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.5,
        imageUrl: '/assets/foodimg/frenchfries2.jpg',
        tags: ['FastFood'],
      },
      {
        id: 8 ,
        name: 'Fries',
        cookTime: '10-20',
        price:300,
        favorite: true,
        origins: ['Cali', 'us'],
        stars:3.5,
        imageUrl: '/assets/foodimg/frenchfries2.jpg',
        tags: ['FastFood'],
      },
    ]

  }
}








