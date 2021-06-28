import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { food } from 'src/app/food';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals: food[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    //this.mealService.getFood().subscribe((meals) => this.meals = meals);
  }

}
