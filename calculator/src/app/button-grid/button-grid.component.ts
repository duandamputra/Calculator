import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss']
})
export class ButtonGridComponent implements OnInit {
  value: string = ''
  @ViewChild('keyboard') keyboardRef !: ElementRef

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.calculatorService.setKeyboardRef(this.keyboardRef)
  }

  onClick(key:any){
    this.calculatorService.setData(key);
  }

}
