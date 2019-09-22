
import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';


 @Component({
   selector: 'app-user-course-list',
   templateUrl: './user-course-list.component.html',
   styleUrls: ['./user-course-list.component.css']
 })
export class UserCourseListComponent implements OnInit  {
//  private subscription=Subscription;
  courses:CourseUser[];
  constructor(private courseService:CourseUserService) { }

  ngOnInit() {
//  this.subscription=this.courseService.courseChanged
//  .subscribe((courses:CourseUser[])=>{
//  this.courses=courses;
//  }
//  );
this.courses=this.courseService. getCoursesUser();
}

// ngOnDestroy()
// {
//   this.subscription.unsubscribe();
// }

}
