import { Component } from '@angular/core';
//import {User} from '../user-profile/app.module';
import { Company } from '../company.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
 /* user:User;
  constructor(){
    this.user=new User();
    this.user.name:"preethi";
    this.user.email:"preethi@codelite.com";
    this.user.password:"***";
    this.user.age:"20";
    this.user.phone:"1234567890";
  }*/
 companylist: Company[] = [
   new Company("abc","xyz",123),
   new Company("def","uvw",456),
   new Company("ghi","rst",789),
 ];
  
}
