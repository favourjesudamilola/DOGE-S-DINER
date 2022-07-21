import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
// import { SearchComponent } from './search/search.component';
// import { SearchrouteComponent } from './searchroute/searchroute.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  //shows product in the home component
  //to wrok import activated route from angular route inside the homecomp.ts
  // {path: 'search/:searchTerm', component:SearchComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  // can create a component that allows the search rout to it.
  {path: 'food/:id', component:FoodPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
