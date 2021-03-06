import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display=false;

  constructor( private authService:AuthService) { }


  ngOnInit() {
  }
onSubmit(form:NgForm)
{
const email =form.value.email;
const password =form.value.password;
this.authService.signupUser(email,password);
  
}
}
