import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss']
})
export class ButtonGridComponent implements OnInit {
  value: string = ''

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
  }

  onClick(key:any){
    this.calculatorService.setData(key);
  }

}
