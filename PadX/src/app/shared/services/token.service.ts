import { Injectable } from '@angular/core';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private existToken: boolean;
  private firstTokenValidation = false;
  constructor() {
    this.validateToken();
  }
  setToken(token: string , username: string) {
    sessionStorage.setItem(Constants.TOKEN_KEY, token);
    sessionStorage.setItem(Constants.TOKEN_TIME_KEY, new Date().getTime().toString());
    sessionStorage.setItem(Constants.USER_USERNAME_KEY, username);
    sessionStorage.setItem(Constants.TOKEN_FIRST_VALIDATION_KEY,
      Constants.TOKEN_FIRST_VALIDATION_FALSE_KEY);
  }
  validateToken() {
    this.existToken = true;
    if (sessionStorage.getItem(Constants.TOKEN_KEY)) {
      const tokenTime = Number(sessionStorage.getItem(Constants.TOKEN_TIME_KEY)) +
      Constants.TOKEN_DURATION_MILLISECONDS;
      const actualTime = new Date().getTime();
      console.log(tokenTime);
      console.log(actualTime);
      if (actualTime > tokenTime) {
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
    this.existToken = false;
  }
  getToken(): string {
    this.validateToken();
    return sessionStorage.getItem(Constants.TOKEN_KEY);
  }
  getUserLogged(): string {
    this.validateToken();
    return sessionStorage.getItem(Constants.USER_USERNAME_KEY);
  }
  existValidToken(): boolean {
    this.validateToken();
    return this.existToken;
  }
  validateFirsTimeToken() {
    sessionStorage.removeItem(Constants.TOKEN_FIRST_VALIDATION_KEY);
  }
  getFirstTokenValidation(): boolean {
    if (sessionStorage.getItem(Constants.TOKEN_FIRST_VALIDATION_KEY)) {
      return true;
    } else {
      return false;
    }
  }
}
