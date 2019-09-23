import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedin=false;
home=false;
  constructor(private authService:AuthService) { }
  ngOnInit() {
  }
  
  loggout()
  {
    this.authService.logOut();
  }
  Home()
  {
     this.home=true; 
   }
}
