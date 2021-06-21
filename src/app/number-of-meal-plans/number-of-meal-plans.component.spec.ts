import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfMealPlansComponent } from './number-of-meal-plans.component';

describe('NumberOfMealPlansComponent', () => {
  let component: NumberOfMealPlansComponent;
  let fixture: ComponentFixture<NumberOfMealPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfMealPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfMealPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
