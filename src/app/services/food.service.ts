import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Crunchy chicken wings',
        price:3500,
        favorite: false,
        stars:3.3,
        imageUrl: '/assets/foodimg/airfrywings2.jpg',
        tags: ['FastFood'],

      },
      {
        id: 2,
        name: 'Chocolate Cake Slice',
        price:4500,
        favorite: false,
        stars:3.3,
        imageUrl: '/assets/foodimg/chocolatesclice2.jpg',
        tags: ['Pastry Slice'],
      },
      {
        id: 3,
        name: 'FruitCake',
        price:4500,
        favorite: false,
        stars:3.5,
        imageUrl: '/assets/foodimg/fruitcake.jpeg',
        tags: ['Pastry Slice'],
      },
      {
        id: 4,
        name: 'Fried chicken',
        price:5000,
        favorite: false,
        stars:3.5,
        imageUrl: '/assets/foodimg/chickenbreast.jpeg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Stir-fry Pasta',
        price:3500,
        favorite: false,
        stars:3.0,
        imageUrl: '/assets/foodimg/pasta2.jpg',
        tags: ['FastFood'],
      },
      {
        id: 6,
        name: 'Fries',
        price:3000,
        favorite: false,
        stars:3.0,
        imageUrl: '/assets/foodimg/frenchfries2.jpg',
        tags: ['FastFood'],
      },
    ]

  }
}



      
      
      
      
      
