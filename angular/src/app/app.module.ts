import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { UserSideComponent } from './user-side/user-side.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
//import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { ModlesComponent } from './modles/modles.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserSideComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    SignupComponent,
    AdminSideComponent,
    //AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    ModlesComponent,
    CompanyDetailsComponent,
    BikeDetailsComponent,
    UserBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
