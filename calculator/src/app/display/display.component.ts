import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
    this.calculatorService.data$.subscribe((data) => {
      console.log(data)
    })
  }

}
