
import { FoodService } from '../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: food;
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,
    private cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverfood => {
        this.food = serverfood;
      });
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
