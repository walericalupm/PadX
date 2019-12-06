import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {Constants} from '../shared/constants';
import {UserRestService} from '../shared/services/user-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  hasError: boolean;
  errorMessage: string;
  constructor(private userRestService: UserRestService) {
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
      response => alert(response.headers.get(Constants.AUTORIZATION_HEADER_KEY)),
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
