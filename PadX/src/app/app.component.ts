import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenService} from './shared/services/token.service';
import {Constants} from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = Constants.APP_NAME;
  existToken: boolean;
  username: string
  constructor(private tokenService: TokenService) {
    this.existToken = false;
    this.tokenService = tokenService;
  }
  ngOnInit() {
    this.validateToken();
  }
  validateToken() {
    this.existToken = false;
    this.username = Constants.EMPTY_STRING;
    if (this.tokenService.existValidToken()) {
      this.existToken = true;
      this.username = this.tokenService.getUserLogged();
    }
  }
  logout() {
    this.tokenService.destroyToken();
    window.location.reload();
  }
}
