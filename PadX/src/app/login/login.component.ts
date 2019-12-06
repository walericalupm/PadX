import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {Constants} from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  hasError: boolean;
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.hasError = false;
    this.errorMessage = '';
  }


  login() {
    console.log(this.user)
    if (!this.user.password || !this.user.username) {
      this.hasError = true;
      this.errorMessage = Constants.MESSAGE_ERROR_LOGIN;
    } else {
      this.hasError = false;
      this.errorMessage = '';
      alert('Yeah!');
    }
  }
}
