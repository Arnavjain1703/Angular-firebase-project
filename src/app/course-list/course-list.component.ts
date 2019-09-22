import { Component, OnInit, OnDestroy, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { CourseUser } from '../shared/courseuser.module';
import { CourseService } from '../course.service';
import {Subscription} from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit,OnDestroy  {
  
  show=false;
private  subscription:Subscription;
 public  courses:CourseUser[];
  constructor(private courseService:CourseService,
    private dataStorageService:DataStorageService
   ) { }

  ngOnInit() {


this.courses=this.courseService. getCourses();
this.subscription=this.courseService.coursesChanged.subscribe((
courses:CourseUser[])=>
{
  this.courses=courses;
}
)
}
shows()
{
 this.show=!this.show;
}
onSaveData()
{
this.dataStorageService.storeCourse()
 .subscribe(
   (response:Response)=>
  {
     console.log(response);
  }
 );
 this.dataStorageService.allCourses()
 .subscribe(
   (response:Response)=>
   {
     console.log(response);
   }

 )

}

onFetch()
{
    this.dataStorageService.getCourses();

}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
