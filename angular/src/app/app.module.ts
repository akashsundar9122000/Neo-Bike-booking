
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './auth/userSignup/userSignup.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
//import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { ModelsComponent } from './models/models.component';

import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';

import { AdminSignupComponent } from './auth/adminSignup/adminSignup.component';
import { AddBikesComponent } from './admin-side/add-bikes/add-bikes.component';



@NgModule({

  

  declarations: [
    AppComponent,
    UserSignupComponent,
    AdminSideComponent,
    //AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
<<<<<<< HEAD
    ModlesComponent,
    CompanyDetailsComponent,
    BikeDetailsComponent,
    UserBookingsComponent
=======
    LoginComponent,
    ModlesComponent,
    AdminSignupComponent,
    AddBikesComponent,
    
>>>>>>> 3be3e0d25f15b0df7294516ea51544d27453b7f1
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
