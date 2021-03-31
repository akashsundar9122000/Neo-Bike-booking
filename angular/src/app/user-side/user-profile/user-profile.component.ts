import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from "src/app/modles/userProfileModel";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  user: UserProfileModel []=[
      {  
        name: "John", 
        
        email: "email@email.com", 
        
        password: "Idasn2x2#",

        age:20,
        mobilenumber:123456789,
      
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
