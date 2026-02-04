import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})

export class Counter implements OnInit {
  // expecting input(props) to be passed from parent Component
  @Input() max: number = 10;
  @Input() min: number = 0;
  @Input() initialVal: number = 0;
  @Input() counterName: string = "Counter 10";
  
  countValue: number = this.initialVal;

  // method to be implemented wuth OnInit interface
  ngOnInit(): void {
    this.countValue = this.initialVal;
  }

  incrementValue = () => {
    this.countValue++;
  }

  decrementValue = () => {
    this.countValue--;
  }

  resetValue = () => {
    this.countValue = this.initialVal;
  }
}
