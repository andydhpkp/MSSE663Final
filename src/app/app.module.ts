import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { InsideComponent } from './inside/inside.component';
import { CreateMealPlanComponent } from './create-meal-plan/create-meal-plan.component';
import { MealPlanHistoryComponent } from './meal-plan-history/meal-plan-history.component';
import { NumberOfMealPlansComponent } from './number-of-meal-plans/number-of-meal-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    InsideComponent,
    CreateMealPlanComponent,
    MealPlanHistoryComponent,
    NumberOfMealPlansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
