
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import {UserSignupComponent} from './auth/userSignup/userSignup.component'
import {LoginComponent} from './auth/login/login.component'
import {AdminProfileComponent} from './admin-side/admin-profile/admin-profile.component'
import {AdminSignupComponent} from './auth/adminSignup/adminSignup.component'
import {AdminNavbarComponent} from './admin-side/admin-navbar/admin-navbar.component'
import {AddBikesComponent} from './admin-side/add-bikes/add-bikes.component'
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
const routes: Routes = [

  {path: 'userDashboard', component: UserDashboardComponent },
  {path: 'userLogin', component: LoginComponent },
  {path: 'userNavbar',component:UserNavbarComponent},
  {path: 'Signup', component:SignupComponent},
  {path: 'userProfileEdit', component:UserProfileEditComponent},
  { path: 'adminDashboard', component: AdminDashboardComponent }, 
 // { path: 'adminSignup', component: AdminSignupComponent },
  { path: 'adminLogin', component: LoginComponent },
  {path : 'adminProfile', component: AdminProfileComponent},

  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'login', component: LoginComponent },
  {path : 'profile', component: AdminProfileComponent},
  { path: 'adminSignup', component: AdminSignupComponent },
  {path: 'adminnavbar', component : AdminNavbarComponent},
  {path: 'addbikes', component : AddBikesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }