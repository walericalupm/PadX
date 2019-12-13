import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {ReservationComponent} from './reservation/reservation.component';
import {Constants} from './shared/constants';


const routes: Routes = [
  {path: Constants.ROUTE_INDEX, component: HeaderComponent},
  {path: Constants.ROUTE_LOGIN, component: LoginComponent},
  {path: Constants.ROUTE_RESERVATION, component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
