import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>('');
  data$: Observable<any> = this.dataSource.asObservable();

  constructor() { }

  setData(data:any){
    this.dataSource.next(data);
  }
}
