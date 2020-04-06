import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Email:any;
  Date:string="sos";
  Gender:string;
  days=[
    {id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8},{id:9,val:9},{id:10,val:10},
    {id:11,val:11},{id:12,val:12},{id:13,val:13},{id:14,val:14},{id:15,val:15},{id:16,val:16},{id:17,val:17},{id:18,val:18},{id:19,val:19},{id:20,val:20},
    {id:21,val:21},{id:22,val:22},{id:23,val:23},{id:24,val:24},{id:25,val:25},{id:26,val:26},{id:27,val:27},{id:28,val:28},{id:29,val:29},{id:30,val:30},
    {id:31,val:31}
  ];
  months=[
    {id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8},{id:9,val:9},{id:10,val:10},
    {id:11,val:11},{id:12,val:12}
  ]
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f.value);
  }
  form:any;
  selected:any;
  constructor(private service:UserService) { 
   
  }

  ngOnInit() {
    this.form= new FormGroup({
      email:new FormControl(),
      //gender:new FormControl()
    })
    this.form.setValue({
      email:this.Date,
      //gender:"male"
    })
    console.log(this.form);
    
  }
  chose(event:any){
    this.selected=event.target.value;
    console.log(event.target.value);
    event.target.value="female";
    
  }
  
}


