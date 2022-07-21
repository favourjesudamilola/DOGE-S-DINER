import { Pipe, PipeTransform } from '@angular/core'; //library
import { FoodService } from './services/food.service';
import { Food } from './shared/model/Food';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
      transform(foods: Food[], searchTerm: string) {
        if (foods.length ===0 || searchTerm ==="") return foods;
        else {
          return foods.filter((food: { name: string; }) => {return food.name.toLowerCase() === searchTerm.toLowerCase()})
        }

        
      }
  // transform(foods: Food[], searchTerm: string)  {
    // if (foods.length ===0 || searchTerm === ""){
    //   return foods;
    // } else {
    //   return foods.filter((food) => {return food.name.toLowerCase() === searchTerm.toLowerCase()})
    // }
  // }

}
