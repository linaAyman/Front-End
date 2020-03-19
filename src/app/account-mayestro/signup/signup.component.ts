import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/shared/assets/assets.service';
import { AccountMayestroService } from '../account-mayestro.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  day
  month
  year
  monthNames

  constructor(private assets:AssetsService,private accService:AccountMayestroService ) { }

  ngOnInit() {
   this.monthNames=this.assets.Monthes()
  }
  submit(f){
    f.value['birthDate']=new Date(this.year,this.month,this.day)
    this.accService.signup(f.value).subscribe(res=>{

    },err=>{
      
    })
  }

}
