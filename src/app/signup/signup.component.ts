import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display=false;

  constructor() { }


  ngOnInit() {
  }
onSubmit(form:NgForm)
{

  
}
}
