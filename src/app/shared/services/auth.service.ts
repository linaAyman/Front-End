import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map}from 'rxjs/operators/map'
import 'rxjs'

@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService  {
  URL=''
  token:string

  constructor(private http:HttpClient) { 
    this.token=localStorage.getItem('token')
  }

}
