import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
    let obs=this.http.get("https://8080-cefbfdbddeddbadbeeefbebeedaedeeeacdcbd.examlyiopb.examly.io/");
    obs.subscribe((response) => {console.log(response)})
  }
}
