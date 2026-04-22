import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse-pipe';
import { SquarePipe } from '../square-pipe';
import { DecimalPipe } from '@angular/common';
@Component({ 
  selector: 'app-attribute-ex',
  imports: [NgClass,FormsModule,ReversePipe,SquarePipe],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEx {
  isChanged = false;
  userName = 'Kshitij '
  message: string = 'hi testing the cutom pipe'
  value: number = 23.6
  changeStyle() {
    this.isChanged = !this.isChanged;
  }
}
