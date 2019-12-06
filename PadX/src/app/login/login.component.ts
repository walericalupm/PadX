import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

}
