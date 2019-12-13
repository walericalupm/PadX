import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation} from '../models/reservation.model';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ReservationRestService {
  constructor(private http: HttpClient) {
  }
  postReservation(reservation: Reservation) {
    const headers = new HttpHeaders().set(Constants.CONTENT_TYPE_HEADER_KEY, Constants.CONTENT_TYPE_JSON_VALUE);
    const url = Constants.BASE_URI.concat(Constants.RESERVATION_URI);
    return this.http.post(url, reservation, {headers});
  }
  getAllReservationInDate(date: number) {
    const url = Constants.BASE_URI.concat(
      Constants.RESERVATION_URI,
      Constants.BACKSLASH_URI_CHARACTER,
      date.toString());
    return this.http.get(url, { observe: 'response' });
  }
  getAllReservation() {
    const url = Constants.BASE_URI.concat(Constants.RESERVATION_URI);
    return this.http.get(url, { observe: 'response' });
  }
}

