import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit ,OnDestroy{
  private subscription:Subscription;
  courses:CourseUser[];
  constructor(private courseService:MyCourseService,
    private dataStorageService:DataStorageService) { }
   
  

  ngOnInit() {
    this.dataStorageService.getmyCourses();
this.courses=this.courseService. getMyCoursesUser();
this.subscription=this.courseService.mycoursesChanged.subscribe((
  courses:CourseUser[])=>
  {
    this.courses=courses;
  }
  )
  }

  
 
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
}







  