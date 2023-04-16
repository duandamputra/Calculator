import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  isFocus: boolean = false;
  value:string = ''
  keyboardRef: ElementRef | null = null

  @ViewChild('field') fieldRef!:ElementRef


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

    this.calculatorService.keyboardRef$.subscribe((data)=>{
      this.keyboardRef = data
    })
  }

  ngAfterViewInit(){
    window.addEventListener('click', (event:any)=>{
      if(this.keyboardRef === null) return;
      const isField = event.target !== this.fieldRef.nativeElement;
      const isKeyboard = event.target.parentElement.parentElement !== this.keyboardRef.nativeElement;
      
      if( isField && isKeyboard ){
        this.isFocus= false;
      }      
    })
  }

  onClick(){
    this.isFocus = true;
  }

}
