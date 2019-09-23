


import { Component, OnInit, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

 @Component({
   selector: 'app-user-course-item',
   templateUrl: './user-course-item.component.html',
   styleUrls: ['./user-course-item.component.css']
})
export class UserCourseItemComponent implements OnInit {
    
    add=false;
    buy=false;
    descrip=false;
    
  @Input () course:CourseUser;
  @Input()index:number;

  constructor(private acService:UserCartService,
              private mcService:MyCourseService,
              private authService:AuthService,
              private dataStorageService:DataStorageService,
              ) { }

  ngOnInit() {
  }
  
  onAddToCart(){
        
        {
  this.acService.addCourse(this.course);
  this.add=true;
  
        }
}
  onAddToMyCourse()
  {
        this.mcService.addMyCourseUser(this.course);
        this.buy=true;
  }
  description()
  {
        this.descrip=!this.descrip;
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

 onSaveMyCourseData()
  { 
    
  this.dataStorageService.myCourses()
   .subscribe(
     (response:Response)=>
    {
       console.log(response);
    }
   );
  }

  
}
