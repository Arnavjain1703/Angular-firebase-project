import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
show=false;
admiShow=false;
tk:any;
  constructor() { }

  ngOnInit() {
    
}

adminShow()
{
this.admiShow=true;
this.show=false
}
userShow()
{
this.show=true;
this.admiShow=false;
}

onSubmit(form:NgForm)
  {
}

}
