import { Component, OnInit } from '@angular/core';
import {TokenService} from '../shared/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private tokenService: TokenService) {
  }

  ngOnInit() {
    if (this.tokenService.getFirstTokenValidation()) {
      window.location.reload();
      this.tokenService.validateFirsTimeToken();
    }
  }
}
