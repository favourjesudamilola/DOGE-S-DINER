//export makes the class accesible from outside food.ts
//the exclamation marks shows the id of food is compulsory
export class Food{
    // filter(arg0: (cards: { name: any; searchTerm: string; }) => boolean) {
    //   throw new Error('Method not implemented.');
    // }
    id!: number;
    name!: string;
    price!: number;
    tags?: string[];
    favorite: boolean =false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
  // length!: number;
}
