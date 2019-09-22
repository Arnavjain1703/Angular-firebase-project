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
    
this.courses=this.courseService. getMyCoursesUser();
this.subscription=this.courseService.mycoursesChanged.subscribe((
  courses:CourseUser[])=>
  {
    this.courses=courses;
  }
  )
  }

  onSaveData()
  {
  this.dataStorageService.myCourses()
   .subscribe(
     (response:Response)=>
    {
       console.log(response);
    }
   );
  }

  onFetch()
{
    this.dataStorageService.getmyCourses();

}
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
}







  