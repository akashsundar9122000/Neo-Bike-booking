import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { ModlesComponent } from './modles/modles.component';

@NgModule({

  

  declarations: [
    AppComponent,
    SignupComponent,
    AdminSideComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    LoginComponent,
    ModlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
