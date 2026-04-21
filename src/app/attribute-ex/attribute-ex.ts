import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({ 
  selector: 'app-attribute-ex',
  imports: [NgClass,FormsModule],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEx {
  isChanged = false;
  userName='Kshitij '
  changeStyle() {
    this.isChanged = !this.isChanged;
  }
}
