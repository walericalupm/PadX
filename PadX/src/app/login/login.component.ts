import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/models/user.model';
import {Constants} from '../shared/constants';
import {UserRestService} from '../shared/services/user-rest.service';
import {TokenService} from '../shared/services/token.service';
// To Use Jquery
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  userRegister: User;
  passwordToValidate: string;
  hasError: boolean;
  hasErrorUsernameDuplicated: boolean;
  errorMessage: string;
  hasErrorRegister: boolean;
  constructor(private userRestService: UserRestService,
              private tokenService: TokenService,
              private router: Router) {
    this.manageMessgaeErrorComponent(false, null);
  }

  ngOnInit() {
    this.user = new User();
    this.userRegister = new User();
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
        this.router.navigateByUrl(Constants.ROUTE_INDEX);
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

  manageRegisterMessgaeErrorComponent(hasErrorUsername: boolean, hasErrorRegister: boolean, errorMessage?: string) {
    this.hasErrorUsernameDuplicated = hasErrorUsername;
    this.hasErrorRegister = hasErrorRegister;
    this.errorMessage = errorMessage === null ? Constants.EMPTY_STRING : errorMessage;
  }

  registerUser() {
    this.manageRegisterMessgaeErrorComponent(false, null);
    if (this.hasErrorUsernameDuplicated
      || !this.userRegister.username
      || !this.userRegister.password
      || !this.userRegister.email) {
      this.manageRegisterMessgaeErrorComponent(true,
        true,
        Constants.MESSAGE_ERROR_REGISTER_REQUIRED);
    } else if (this.userRegister.password === this.passwordToValidate) {
      this.registerUserIntoServer();
    } else {
      this.manageRegisterMessgaeErrorComponent(false ,
        true,
        Constants.MESSAGE_ERROR_PASSWORD_DOES_NOT_MATCH);
    }
  }
  registerUserIntoServer() {
    // Clean Error Messages
    this.manageRegisterMessgaeErrorComponent(false, false, null);
    // Call API Service
    this.userRestService.postUser(this.userRegister).subscribe(
      response => {
        $('#registerModal').modal(Constants.HIDE_EVENT);
        $('#toastRegistro').toast(Constants.SHOW_EVENT);
      },
      error => {
        if (error.status === Constants.HTTP_ERROR_SERVER_CODE) {
          this.manageRegisterMessgaeErrorComponent(false, true, Constants.MESSAGE_ERROR_SERVICE_DOWN);
        }
      }
    );
  }
  verifyUsername() {
    console.log(this.userRegister.username);
    this.userRestService.getFindUser(this.userRegister.username).subscribe(
      response => {
        this.manageRegisterMessgaeErrorComponent(true, false,
          Constants.MESSAGE_ERROR_USERNAME_DUPLICATED);
      },
      error => {
        if (error.status === Constants.HTTP_NOT_FOUND_CODE) {
          this.manageRegisterMessgaeErrorComponent(false, false,
            null);
        }
      });
  }
}
