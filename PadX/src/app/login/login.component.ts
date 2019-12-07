import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../shared/models/user.model';
import {Constants} from '../shared/constants';
import {UserRestService} from '../shared/services/user-rest.service';
import {TokenService} from '../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  hasError: boolean;
  errorMessage: string;
  constructor(private userRestService: UserRestService,
              private tokenService: TokenService,
              private router: Router) {
    this.manageMessgaeErrorComponent(false, null);
  }

  ngOnInit() {
    this.user = new User();
  }


  login() {
    if (!this.user.password || !this.user.username) {
      this.manageMessgaeErrorComponent(true,
        Constants.MESSAGE_ERROR_USER_PASSWORD_REQUIRED);
    } else {
      this.loginUserIntoServer();
    }
  }
  loginUserIntoServer() {
    // Clean Error Messages
    this.manageMessgaeErrorComponent(false, null);
    // Call API Service
    this.userRestService.getLogin(this.user.username, this.user.password).subscribe(
      response => {
        this.tokenService.setToken(
          response.headers.get(Constants.AUTORIZATION_HEADER_KEY),
          this.user.username
        );
        this.router.navigateByUrl('');
      },
      error => {
        if (error.status === Constants.HTTP_UNAUTHORIZED_CODE) {
          this.manageMessgaeErrorComponent(true,
            Constants.MESSAGE_ERROR_UNAUTHORIZED);
        } else {
          this.manageMessgaeErrorComponent(true,
            Constants.MESSAGE_ERROR_SERVICE_DOWN);
        }
      }
    );
  }
  manageMessgaeErrorComponent(hasError: boolean, errorMessage?: string) {
    this.hasError = hasError;
    this.errorMessage = errorMessage === null ? Constants.EMPTY_STRING : errorMessage;
  }
}
