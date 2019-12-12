import { Component, OnInit } from '@angular/core';
import {Reservation} from '../shared/models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private reservation: Reservation;
  private hour: number;
  constructor() {
    this.reservation = new Reservation();
  }

  ngOnInit() {
  }

}
