import { Component } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  user1: User = new User('john_doe', 'password123', 'admin');
  user2: User = new User('jane_smith', 'password456', 'user');
  user3: User = new User('alice_jones', 'password789', 'user');

  
}
