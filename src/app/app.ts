import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './user-details/user-details';  
import { FacultyDetails } from './faculty-details/faculty-details';
import{ EventhandlingDemo } from './eventhandling-demo/eventhandling-demo';
@Component({
  selector: 'app-root',
  imports: [ UserDetails, FacultyDetails, EventhandlingDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('Angular-Project2');
  imgUrl = 'premium_photo-1747851576159-8d483776648d.avif';
}
