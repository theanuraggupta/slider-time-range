import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  selectedRange: any;
  selectedTime: number;
  sliderWidth: number;
  timerWidth: number;
  enableTimer: boolean;
  selectDropdown: any = [
    {
        'value': 1,
        'startRange': 0,
        'endRange': 100
    },
    {
        'value': 2,
        'startRange': 100,
        'endRange': 200
    },
    {
        'value': 3,
        'startRange': 200,
        'endRange': 500
    },
    {
        'value': 4,
        'startRange': 500,
        'endRange': 1000
    },
    {
        'value': 5,
        'startRange': 1000,
        'endRange': 1500
    }
  ];
  constructor(private router: Router) {}
  ngOnInit() {
    this.selectedRange = this.selectDropdown[0];
    this.changedValue(this.selectedRange);
  }

  changedValue(value) {
    this.selectedTime = ((value.endRange - value.startRange) / 2) + value.startRange;
    this.changedTime(this.selectedTime);
  }

  changedTime(value) {
    const range = this.selectedRange.endRange - this.selectedRange.startRange;
    const s = value - this.selectedRange.startRange;
    this.timerWidth = (s / range) * 100;
    this.sliderWidth = this.timerWidth + (this.timerWidth > 9 ? 1.5 : 1); // for aligning the timerWidth, adding some more width
  }

  navigateToScreen2(){
    this.router.navigate(['/screen2']);
  }

  submit() {
    if (!this.enableTimer) {
      this.enableTimer = false;
      this.router.navigate(['/screen2']);
    } else {
      setTimeout(this.navigateToScreen2.bind(this), this.selectedTime * 1000);
    }
  }

}
