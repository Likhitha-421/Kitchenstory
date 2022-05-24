import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:food[] = [];
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<food[]>;
    activatedRoute.params.subscribe((params)=>  {
      if(params.searchTerm)
        foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      else
        foodsObservable = foodService.getAll();

        foodsObservable.subscribe((serverfoods) => {
          this.foods = serverfoods;

        })
    })
   }

  ngOnInit(): void {
  }

}
