import { Component, OnInit, Input } from '@angular/core';
import { food } from 'src/app/food';
import { FOODS } from 'src/app/mock-food';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css']
})
export class MealItemComponent implements OnInit {
  @Input()
  food!: food;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(food: any) {
    console.log(food);
  }

}
