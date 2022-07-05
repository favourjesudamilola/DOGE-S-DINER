import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
    ]

  }
}








