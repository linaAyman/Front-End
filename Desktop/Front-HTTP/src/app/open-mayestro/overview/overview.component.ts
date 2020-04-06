import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  Email:any;
  Date:string;
  country:string;
  Username:string;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getEmail()
    .subscribe(
      (data :any)=>{
       this.Email=data.email;
      }
    )
      this.service.getDate()
      .subscribe(
        (data :any)=>{
          this.Date=data.birthDate;
        }
      )
      this.service.getCountry()
      .subscribe(
        (data :any)=>{
          this.country=data.country;
        }
      )
      this.service.getUsername()
      .subscribe(
        (data :any)=>{
          this.Username=data.name;
        }
      )
  }

}
