import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
 private subscription:Subscription;
  courses:CourseUser[];
  constructor(private userCartService:UserCartService) { }

  ngOnInit() {
 
this.courses=this.userCartService. getUserCart();
this.subscription=this.userCartService.cartChanged
.subscribe((courses:CourseUser[])=>{
  this.courses=courses;
})


}

ngOnDestroy()
 {
   this.subscription.unsubscribe()
 }

}
