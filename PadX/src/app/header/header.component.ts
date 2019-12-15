import { Component, OnInit } from '@angular/core';
import {TokenService} from '../shared/services/token.service';
import {Router} from "@angular/router";
import {Constants} from "../shared/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  existToken: boolean;
  constructor( private tokenService: TokenService,
               private router: Router) {
  }

  ngOnInit() {
    this.existToken = false;
    if (this.tokenService.getFirstTokenValidation()) {
      window.location.reload();
      this.tokenService.validateFirsTimeToken();
    }
  }
  goReservationOrLogin() {
    if (this.tokenService.getToken()){
      this.router.navigateByUrl(Constants.ROUTE_RESERVATION);
    } else {
      this.router.navigateByUrl(Constants.ROUTE_LOGIN);
    }
  }
}
