import {Component, OnInit} from '@angular/core';
import {TokenService} from './shared/services/token.service';
import {Constants} from './shared/constants';
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = Constants.APP_NAME;
  existToken: boolean;
  username: string
  constructor(private tokenService: TokenService) {
    this.existToken = false;
    this.tokenService = tokenService;
  }
  ngOnInit() {
    const value = this.tokenService.getEmittedValue().
    subscribe(item => {
      this.validateToken();
    });
  }
  validateToken() {
    this.existToken = false;
    this.username = Constants.EMPTY_STRING;
    if (this.tokenService.getToken()) {
      this.existToken = true;
      this.username = this.tokenService.getUserLogged();
    }
  }
}
