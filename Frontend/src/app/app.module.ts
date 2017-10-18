import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ListofunitComponent } from './listofunit/listofunit.component';
import { ListofcustomerComponent } from './listofcustomer/listofcustomer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    BookingComponent,
    LoginComponent,
    UsersignupComponent,
    AdmindashboardComponent,
    ListofunitComponent,
    ListofcustomerComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component : RoomlistComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
