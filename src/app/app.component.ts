import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRange: any;
  selectedTime: number;
  sliderWidth: number;
  timerWidth: number;
  selectDropdown: any = [
    {
        "value": 1,
        "startRange": 0,
        "endRange": 100
    },
    {
        "value": 2,
        "startRange": 100,
        "endRange": 200
    },
    {
        "value": 3,
        "startRange": 200,
        "endRange": 500
    },
    {
        "value": 4,
        "startRange": 500,
        "endRange": 1000
    },
    {
        "value": 5,
        "startRange": 1000,
        "endRange": 1500
    }
  ];
  constructor(){}
  ngOnInit() {
    this.selectedRange = this.selectDropdown[0];
    this.changedValue(this.selectedRange);
  }

  changedValue(value){
    this.selectedTime = ((value.endRange - value.startRange) / 2) + value.startRange;
    this.changedTime(this.selectedTime);
  }

  changedTime(value){
    let range = this.selectedRange.endRange - this.selectedRange.startRange;
    let s = value - this.selectedRange.startRange;
    this.timerWidth = (s / range) * 100;
    this.sliderWidth = this.timerWidth + (this.timerWidth >9 ? 1.5 : 1);
  }
}
