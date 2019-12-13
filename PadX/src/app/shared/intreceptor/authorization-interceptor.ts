import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '../services/token.service';
import {Observable} from 'rxjs';
import {Constants} from '../constants';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get Token and Inject It
    if (this.tokenService.getToken()) {
      const token = this.tokenService.getToken();
      const request = req.clone({headers: req.headers.set(
        Constants.AUTORIZATION_HEADER_KEY,
          token)});
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }

}
