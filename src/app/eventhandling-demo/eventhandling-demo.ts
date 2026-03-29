import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventhandling-demo',
  imports: [CommonModule],
  templateUrl: './eventhandling-demo.html',
  styleUrl: './eventhandling-demo.css',
})
export class EventhandlingDemo {
  count: number = 0;
  bgColor = 'white';
  incrementCount(event: any) {
    this.count += 1;
    console.log(event);
    console.log('Button clicked! Count: ' + event.target.value);
  }
  changeBackground() {
    this.bgColor = 'pink';
  }

}
