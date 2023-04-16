import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>('');
  data$: Observable<any> = this.dataSource.asObservable();

  private keyboardRef: BehaviorSubject<ElementRef | null> = new BehaviorSubject<ElementRef | null>(null);
  keyboardRef$: Observable<ElementRef | null> = this.keyboardRef.asObservable();

  constructor() { }

  setData(data:any){
    this.dataSource.next(data);
  }

  setKeyboardRef(data:ElementRef | null){
    this.keyboardRef.next(data);
  }
}
