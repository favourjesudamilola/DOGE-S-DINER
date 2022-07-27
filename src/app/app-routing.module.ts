import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
// import { SearchrouteComponent } from './searchroute/searchroute.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  //shows product in the home component
  //to wrok import activated route from angular route inside the homecomp.ts
  // {path: 'search/:searchTerm', component:SearchComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  // can create a component that allows the search rout to it.
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart', component:CartComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
