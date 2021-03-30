import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component'
import { LoginComponent } from './auth/login/login.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
const routes: Routes = [
  {path: 'dashboard', component: UserDashboardComponent },
  {path: 'login', component: LoginComponent },
  {path: 'navbar',component:UserNavbarComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'profileedit', component:UserProfileEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
