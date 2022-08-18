import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { RatingModule } from 'ng-starrating';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FoodPageComponent } from './food-page/food-page.component';
import { SearchrouteComponent } from './searchroute/searchroute.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { TagsComponent } from './tags/tags.component';
import { HistoryComponent } from './history/history.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    SearchComponent,
    FoodPageComponent,
    SearchrouteComponent,
    SearchFilterPipe,
    TagsComponent,
    HistoryComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
