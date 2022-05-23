import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return sample_foods;
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getFoodById(foodId:string):food{
    return this.getAll().find(food => food.id == foodId) ?? new food()
  }

}

