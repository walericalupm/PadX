import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {ReservationComponent} from './reservation/reservation.component';
import {Constants} from './shared/constants';
import {ServiceComponent} from './service/service.component';
import {CourtComponent} from './court/court.component';
import {InstructorsComponent} from './instructors/instructors.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: Constants.ROUTE_INDEX, component: HeaderComponent},
  {path: Constants.ROUTE_LOGIN, component: LoginComponent},
  {path: Constants.ROUTE_RESERVATION, component: ReservationComponent},
  {path: Constants.ROUTE_SERVICES, component: ServiceComponent},
  {path: Constants.ROUTE_COURTS, component: CourtComponent},
  {path: Constants.ROUTE_INSTRUCTORS, component: InstructorsComponent},
  {path: Constants.ROUTE_CONTACT_US, component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
