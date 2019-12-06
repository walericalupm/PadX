import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  constructor(private http: HttpClient) {
  }

  getLogin(username: string, password: string) {
    const url = Constants.BASE_URI.concat(
      Constants.USER_URI,
      Constants.USER_LOGIN_URI,
      Constants.INIT_PARAMS_URI_CHARACTER,
      Constants.USER_LOGIN_URI_PARAM,
      username,
      Constants.CONCAT_PARAM_URI_CHARACTER,
      Constants.PASSWORD_LOGIN_URI_PARAM,
      password);
    return this.http.get(url, { observe: 'response' });
  }

  getFindUser(username: string) {
    const url = Constants.BASE_URI.concat(
      Constants.USER_URI,
      Constants.BACKSLASH_URI_CHARACTER,
    username
  );
    return this.http.get(url);
  }

  postUser(user: User) {
    const headers = new HttpHeaders().set(Constants.CONTENT_TYPE_HEADER_KEY, Constants.CONTENT_TYPE_JSON_VALUE);
    const url = Constants.BASE_URI.concat(Constants.USER_URI);
    return this.http.post(url, user, {headers});
  }

  deleteUser(username: string) {
    const url = Constants.BASE_URI.concat(
      Constants.USER_URI,
      Constants.BACKSLASH_URI_CHARACTER,
      username);
    return this.http.delete(url);
  }
}


