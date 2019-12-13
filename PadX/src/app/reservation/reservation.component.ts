import {Component, OnInit} from '@angular/core';
import {Reservation} from '../shared/models/reservation.model';
import {Constants} from '../shared/constants';
import {formatDate} from '@angular/common';
import {ReservationRestService} from '../shared/services/reservation-rest.service';
import {TokenService} from '../shared/services/token.service';
import {Router} from '@angular/router';
// To Use Jquery
declare var $: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private reservation: Reservation;
  private hour: string;
  private date: string;
  private hasError: boolean;
  private needsLogin: boolean;
  private messageError: string;
  private court: string;

  constructor(private reservationService: ReservationRestService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
    this.reservation = new Reservation();
    this.court = Constants.DEFAULT_COURT;
    this.hour = Constants.DEFAULT_HOUR;
    this.date = this.getTodayDate();
  }

  reservar() {
    this.reservation.courtid = +this.court;
    this.reservation.rsvdatetime = this.convertReservationDateToJavascriptDateFormat();
    // Call API
    this.reservationService.postReservation(this.reservation).subscribe(
      response => {
        $('#toastReserva').toast(Constants.SHOW_EVENT);
      },
      error => {
        this.manageRequestError(error);
      }
    );
  }

  manageRequestError(error) {
    this.hasError = true;
    this.needsLogin = false;
    switch (error.status) {
      case Constants.HTTP_API_RESERVATION_DATA_NO_VALID_CODE:
        this.messageError = Constants.MESSAGE_ERROR_RESERVATION_DATA_NO_VALID;
        return;
      case Constants.HTTP_UNAUTHORIZED_CODE:
        this.messageError = Constants.MESSAGE_ERROR_RESERVATION_NOT_REALIZED.concat(
          Constants.WHITE_SPACE,
          Constants.MESSAGE_ERROR_SESSION_EXPIRED);
        this.needsLogin = true;
        return;
      case Constants.HTTP_API_COURT_NOT_AVAILABLE_CODE:
        this.messageError = Constants.MESSAGE_ERROR_COURT_NOT_AVAILABLE;
        return;
      default:
        this.messageError = Constants.MESSAGE_ERROR_SERVICE_DOWN;
        return;
    }
  }

  convertReservationDateToJavascriptDateFormat(): number {
    const dateToConvert = this.date.concat(
      Constants.ISO_TIME_INITIAL_CHARACTER,
      this.hour,
      Constants.UTC_TIME_CHARACTER
    );
    return new Date(dateToConvert).getTime();
  }

  getTodayDate(): string {
    return formatDate(new Date(),
      Constants.DATE_DEFAULT_FORMAT,
      Constants.DATE_DEFAULT_LOCATION).toString();
  }

  cleanErrorMessage() {
    this.messageError = Constants.EMPTY_STRING;
    this.hasError = false;
    if (this.needsLogin) {
      this.router.navigateByUrl(Constants.ROUTE_LOGIN);
    }
  }
}
