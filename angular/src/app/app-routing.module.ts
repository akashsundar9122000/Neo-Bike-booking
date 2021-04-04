import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component'
import { LoginComponent } from './auth/login/login.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import {SuperAdminDasboardComponent } from './super-admin-side/super-admin-dasboard/super-admin-dasboard.component'
import { SuperAdminAllbookingsComponent } from './super-admin-side/super-admin-allbookings/super-admin-allbookings.component';
import { SuperAdminLoginComponent } from './super-admin-side/super-admin-login/super-admin-login.component';

const routes: Routes = [
  {path: 'dashboard', component: UserDashboardComponent },
  {path: 'login', component: LoginComponent },
  {path: 'navbar',component:UserNavbarComponent},
  {path: 'usersignup', component:SignupComponent},
  {path: 'profileedit', component:UserProfileEditComponent},
  {path: 'userprofile', component:UserProfileComponent},
  {path: 'userbookings', component:UserBookingsComponent},
  {path: 'companydetails', component:CompanyDetailsComponent},
  {path: 'bikedetails', component:BikeDetailsComponent},
  {path: 'superadmindashboard', component:SuperAdminDasboardComponent},
  {path: 'allbookings', component:SuperAdminAllbookingsComponent},
  {path: 'superadminlogin', component:SuperAdminLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
