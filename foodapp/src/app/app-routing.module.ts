import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule} from '@angular/core';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:"cart-page", component: CartPageComponent},
  {path:"Login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
