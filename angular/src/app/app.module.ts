import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './auth/userSignup/userSignup.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { ModlesComponent } from './modles/modles.component';
import { AdminSignupComponent } from './auth/adminSignup/adminSignup.component';


@NgModule({

  

  declarations: [
    AppComponent,
    UserSignupComponent,
    AdminSideComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    LoginComponent,
    ModlesComponent,
    AdminSignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
