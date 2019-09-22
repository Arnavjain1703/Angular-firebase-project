import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
 private subscription:Subscription;
  courses:CourseUser[];
  constructor(private userCartService:UserCartService,
              private dataStorageService:DataStorageService) { }

  ngOnInit() {

this.subscription=this.userCartService.cartChanged
.subscribe((courses:CourseUser[])=>{
 this.courses=courses;
}
 );
this.courses=this.userCartService.getUserCart();
}

ngOnDestroy()
 {
   this.subscription.unsubscribe()
 }
 onSaveData()
 {
   this.dataStorageService.userCart().subscribe(
    (response:Response)=>
   {
      console.log(response);
   }
  );
 }

 onFetch()
 {
  this.dataStorageService.getCart();

 }

}
