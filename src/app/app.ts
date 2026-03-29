import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './user-details/user-details';  
import { FacultyDetails } from './faculty-details/faculty-details';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails, FacultyDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Project2');
}
