import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { UserSideComponent } from './user-side/user-side.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ModelsComponent } from './models/models.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { SuperAdminSideComponent } from './super-admin-side/super-admin-side.component';
import { SuperAdminLoginComponent } from './super-admin-side/super-admin-login/super-admin-login.component';
import { SuperAdminNavbarComponent } from './super-admin-side/super-admin-navbar/super-admin-navbar.component';
import { SuperAdminDasboardComponent } from './super-admin-side/super-admin-dasboard/super-admin-dasboard.component';
import { SuperAdminAllbookingsComponent } from './super-admin-side/super-admin-allbookings/super-admin-allbookings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserSideComponent,
    UserProfileComponent,
    CompanyDetailsComponent,
    SignupComponent,
    ModelsComponent,
    UserProfileEditComponent,
    UserBookingsComponent,
    BikeDetailsComponent,
    SuperAdminSideComponent,
    SuperAdminLoginComponent,
    SuperAdminNavbarComponent,
    SuperAdminDasboardComponent,
    SuperAdminAllbookingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

