


import { Component, OnInit, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';
import { MyCourseService } from 'src/app/mycourse.sercice';

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
  constructor(private acService:UserCartService,private mcService:MyCourseService
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
  
  
}
