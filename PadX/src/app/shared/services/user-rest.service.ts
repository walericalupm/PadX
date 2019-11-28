import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  constructor(private http: HttpClient) { }

  /*getLogin(username: string, password: string) {
     const url = Constants.;
  }*/
}


