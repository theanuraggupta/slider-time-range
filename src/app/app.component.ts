import { Component, OnDestroy } from '@angular/core';

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
  isScreen1: boolean;
  isScreen2: boolean;
  enableTimer: boolean;
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
    this.isScreen1 = true;
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
    this.sliderWidth = this.timerWidth + (this.timerWidth >9 ? 1.5 : 1); // for aligning the timerWidth, adding some more width
  }

  submit(){
    this.isScreen1 = false;
    if(!this.enableTimer){
      this.isScreen2 = true;
      this.enableTimer = false;
      console.log(this.isScreen2);
    }else{
      setTimeout(function(){
        this.isScreen1 = false;
        this.isScreen2 = true;
        console.log(this.isScreen2);
      }, this.selectedTime * 1000);
    }
  }
}
