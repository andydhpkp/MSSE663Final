import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanHistoryComponent } from './meal-plan-history.component';

describe('MealPlanHistoryComponent', () => {
  let component: MealPlanHistoryComponent;
  let fixture: ComponentFixture<MealPlanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
