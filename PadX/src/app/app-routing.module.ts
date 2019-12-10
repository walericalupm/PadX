import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {ReservationComponent} from './reservation/reservation.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reservation', component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
