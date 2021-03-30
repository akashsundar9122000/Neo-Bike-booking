import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import {SignupComponent} from './auth/signup/signup.component'
import {LoginComponent} from './auth/login/login.component'
import {AdminProfileComponent} from './admin-side/admin-profile/admin-profile.component'

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path : 'profile', component: AdminProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }