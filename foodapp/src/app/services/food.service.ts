import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/constants/Urls';
import { food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<food[]>{
    return this.http.get<food[]>(FOODS_URL);
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.http.get<food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }
  getFoodById(foodId:string):Observable<food>{
    return this.http.get<food>(FOODS_BY_ID_URL + foodId);
  }
}



