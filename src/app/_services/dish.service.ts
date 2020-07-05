import { Injectable } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/Dishes';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
    // new Promise((resolve) => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES), 2000);
    // });
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map((dish) => dish.id)).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}