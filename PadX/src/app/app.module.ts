import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserRestService} from './shared/services/user-rest.service';
import { ReservationComponent } from './reservation/reservation.component';
import {ReservationRestService} from './shared/services/reservation-rest.service';
import {AuthorizationInterceptor} from './shared/intreceptor/authorization-interceptor';
import { CourtComponent } from './court/court.component';
import { ServiceComponent } from './service/service.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ReservationComponent,
    CourtComponent,
    ServiceComponent,
    InstructorsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserRestService,
    ReservationRestService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
