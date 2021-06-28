import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { FOODS } from 'src/app/mock-food';
import { food } from 'src/app/food';


@Injectable({
  providedIn: 'root'
})
export class MealService {
  //private apiUrl = 'http://localhost:5000/tasks'

  constructor(/*private http:HttpClient*/) { }

  //getFood(): Observable<food[]> {
    //return this.http.get<food[]>(this.apiUrl)
  //}
}
