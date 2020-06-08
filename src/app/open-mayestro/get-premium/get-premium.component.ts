import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-get-premium',
  templateUrl: './get-premium.component.html',
  styleUrls: ['./get-premium.component.css']
})
export class GetPremiumComponent implements OnInit {

  plan:string;
  monthly=true;
  yearly=false;
  constructor(private route:ActivatedRoute,private service:UserService) { }
  
  ngOnInit() {
    // console.log("this.plan")
    this.route.params.subscribe(
      param=>{
        this.plan=param["plan"]
        console.log("this.plan")
        console.log(this.plan)
        return this.plan
      })
      if(this.plan=="yearly"){
        this.monthly=false;
        this.yearly=true;
      }
  }
  
}
