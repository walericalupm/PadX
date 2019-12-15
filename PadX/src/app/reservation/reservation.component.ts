import {Component, OnInit} from '@angular/core';
import {Reservation} from '../shared/models/reservation.model';
import {Constants} from '../shared/constants';
import {formatDate} from '@angular/common';
import {ReservationRestService} from '../shared/services/reservation-rest.service';
import {TokenService} from '../shared/services/token.service';
import {Router} from '@angular/router';
import {ReservationResponse} from '../shared/models/reservation-response.model';
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
  private hasErrorUserReservations: boolean;
  private needsLogin: boolean;
  private messageError: string;
  private court: string;
  private listReservations: ReservationResponse[];
  private messageErrorUserReservation: string;
  private reservationToDelete: ReservationResponse;


  constructor(private reservationService: ReservationRestService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.tokenService.getToken()) {
      this.router.navigateByUrl(Constants.ROUTE_LOGIN);
    } else {
      this.reservation = new Reservation();
      this.reservationToDelete = new ReservationResponse();
      this.court = Constants.DEFAULT_COURT;
      this.hour = Constants.DEFAULT_HOUR;
      this.date = this.getTodayDate();
      this.loadAllUserReservation();
    }
  }

  reservate() {
    this.cleanErrorMessage();
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

  loadAllUserReservation() {
    this.listReservations = [];
    this.hasErrorUserReservations = false;
    this.messageErrorUserReservation = Constants.EMPTY_STRING;
    this.reservationService.getAllReservation().subscribe(
      (value: ReservationResponse[]) => {
        if (value.length > 0) {
          this.addReservations(value);
        } else {
          this.hasErrorUserReservations = true;
          this.messageErrorUserReservation = Constants.MESSAGE_INFORMATION_USER_DO_NOT_HAVE_RESERVATIONS;
        }
      },
      error => {
        if (error.status === Constants.HTTP_UNAUTHORIZED_CODE) {
          this.router.navigateByUrl(Constants.ROUTE_LOGIN);
        } else {
          this.messageErrorUserReservation = Constants.MESSAGE_ERROR_SERVICE_DOWN;
          this.hasErrorUserReservations = true;
        }
      }
    );
  }

  addReservations(reservations: ReservationResponse[]) {
    const today = this.convertReservationDateToJavascriptDateFormat();
    for (const reservation of reservations) {
      if (reservation.rsvdateTime > today) {
        this.listReservations.push(reservation);
      }
    }
    if (this.listReservations.length < 1) {
      this.hasErrorUserReservations = true;
      this.messageErrorUserReservation = Constants.MESSAGE_INFORMATION_USER_DO_NOT_HAVE_RESERVATIONS;
    }
  }
  showActiveReservations() {
    $('#activeReservationsModal').modal(Constants.SHOW_EVENT);
  }

  deleteReservation(reservation: ReservationResponse) {
    this.reservationToDelete = reservation;
    $('#activeReservationsModal').modal(Constants.HIDE_EVENT);
    $('#deleteBookinModal').modal(Constants.SHOW_EVENT);
  }

  deleteReservationFromServer() {
    $('#deleteBookinModal').modal(Constants.HIDE_EVENT);
    this.reservationService.deleteReservation(this.reservationToDelete.rsvId.toString())
      .subscribe(
        value => {
          this.loadAllUserReservation();
        }
      );
    $('#activeReservationsModal').modal(Constants.SHOW_EVENT);
  }

  clearReservationToDelete() {
    $('#deleteBookinModal').modal(Constants.HIDE_EVENT);
    $('#activeReservationsModal').modal(Constants.SHOW_EVENT);
    this.reservationToDelete = new ReservationResponse();
  }

}
