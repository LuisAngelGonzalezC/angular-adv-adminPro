import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit{
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  @Input('value') percent: number;
  @Input() btnClass: string = 'btn-primary';
  @Output() output_value: EventEmitter<number> = new EventEmitter();

  changeValue(value: number)
  {
    if ( this.percent >= 100 && value >= 0 ) {
      this.output_value.emit(100);
      return this.percent = 100;
    }
    else if ( this.percent <=0 && value < 0 ) {
      this.output_value.emit(0);
      return this.percent = 0;
    }
    else{
      this.percent = this.percent + value;
      this.output_value.emit(this.percent)
    }
  }
  onChange(newValue: number){
    if (newValue >= 100) {
      this.percent = 100;
    } else {
      this.percent = newValue;
    }

    this.output_value.emit(this.percent);
  }
}
