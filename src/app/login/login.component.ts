import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import {   NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
show=false;
errorshow=false;

tk:any;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    
}

errorShow()
{
  this.errorshow=true
}
adminShow()
{

this.show=false}

userShow()
{
this.show=true;

}

onSubmit(form:NgForm)
  {   
    const email =form.value.email;
    const password=form.value.password;
     this.authService.signinUser(email,password); 
  }

}
