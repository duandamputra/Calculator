import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  isFocus: boolean = false;
  value:string = ''

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
    this.calculatorService.data$.subscribe((data)=>{
      if(this.isFocus){
        if (data === 'clear'){
          this.value = ''
        } else if (data === 'delete'){
          this.value = this.value.substring(0, this.value.length - 1);
        } else {
          this.value += data
        }
      }
    })
  }

  onClick(){
    this.isFocus = true;
    window.addEventListener('click', (event)=>{
      event.target
      console.log(event.target);
      
    })
  }

}
