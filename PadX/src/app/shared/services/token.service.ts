import { Injectable, Output, EventEmitter } from '@angular/core';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.validateToken();
  }
  setToken(token: string , username: string) {
    sessionStorage.setItem(Constants.TOKEN_KEY, token);
    sessionStorage.setItem(Constants.TOKEN_TIME_KEY, new Date().getTime().toString());
    sessionStorage.setItem(Constants.USER_USERNAME_KEY, username);
    this.change.emit(true);
  }
  validateToken() {
    if (sessionStorage.getItem(Constants.TOKEN_KEY)) {
      const tokenTime = Number(sessionStorage.getItem(Constants.TOKEN_TIME_KEY)) +
      Constants.TOKEN_DURATION_MILLISECONDS;
      const actualTime = new Date().getTime();
      if (tokenTime > actualTime) {
        this.destroyToken();
      }
    } else {
      this.destroyToken();
    }
  }
  destroyToken() {
    sessionStorage.removeItem(Constants.TOKEN_KEY);
    sessionStorage.removeItem(Constants.USER_USERNAME_KEY);
    sessionStorage.removeItem(Constants.TOKEN_TIME_KEY);
    this.change.emit(false);
  }
  getToken(): string {
    this.validateToken();
    return sessionStorage.getItem(Constants.TOKEN_KEY);
  }
  getUserLogged(): string {
    this.validateToken();
    return sessionStorage.getItem(Constants.USER_USERNAME_KEY);
  }
  getEmittedValue() {
    return this.change;
  }
}
