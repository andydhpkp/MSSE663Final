import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateMealPlanComponent } from './create-meal-plan/create-meal-plan.component';
import { HomeComponent } from './home/home.component';
import { InsideComponent } from './inside/inside.component';
import { LoginComponent } from './login/login.component';
import { MealPlanHistoryComponent } from './meal-plan-history/meal-plan-history.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'create-meal-plan', component: CreateMealPlanComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inside', component: InsideComponent },
  { path: 'login', component: LoginComponent },
  { path: 'meal-plan-history', component: MealPlanHistoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
