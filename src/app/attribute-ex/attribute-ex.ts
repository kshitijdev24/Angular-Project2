import { Component } from '@angular/core';
import { NgClass } from "@angular/common";


@Component({ 
  selector: 'app-attribute-ex',
  imports: [NgClass],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEx {
  isChanged = false;
  changeStyle() {
    this.isChanged = !this.isChanged;
  }
}
