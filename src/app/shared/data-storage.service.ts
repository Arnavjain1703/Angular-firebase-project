import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
import { CourseUser } from './courseuser.module';
import { CourseUserService } from '../courseuser.service';

import { Observable } from 'rxjs';
import { UserCartService } from '../usercart.service';
import { MyCourseService } from '../mycourse.sercice';

@Injectable()
export class DataStorageService
{
  tk:any;
  courses:CourseUser[]
  private rootUrl="https://angular-project-2c6cf.firebaseio.com"
constructor(private http:HttpClient,private courseService:CourseService,
            private courseuserService:CourseUserService,
            private userCartService:UserCartService,
            private myCourseService:MyCourseService){}

storeCourse(){
 return this.http.put(this.rootUrl+'/courselist.json'
  ,  this.courseService.getCourses());

}

allCourses()
{
return this.http.put( this.rootUrl+'/allCourses.json',this.courseuserService.getCoursesUser())
}

userCart()
{
  return this.http.put( this.rootUrl+'/UserCart.json',this.userCartService.getUserCart())
}
myCourses()
{
   return this.http.put(this.rootUrl+'/Mycourse.json',this.myCourseService.getMyCoursesUser())
}
getCourses()
{
 return  this.http.get(this.rootUrl+'/courselist.json')
 .subscribe(
   response =>
   {
     this.tk=response;
     this.courses=this.tk;
     this.courseService.setCourses(this.courses);
   }
 ) 
}
getallCourses()
{
  return this.http.get(this.rootUrl+'/allCourses.json')
  .subscribe(
    response =>
    {
      this.tk=response;
      this.courses=this.tk;
      this.courseuserService.setCourses(this.courses);
    })
}
getCart()
{

  return this.http.get(this.rootUrl+'/UserCart.json')
  .subscribe(
    response =>
    {
      this.tk=response;
      this.courses=this.tk;
      this.userCartService.setCourses(this.courses);
    })
}
getmyCourses()
{
  return this.http.get(this.rootUrl+'/Mycourse.json')
  .subscribe(
    response =>
    {
      this.tk=response;
      this.courses=this.tk;
      this.myCourseService.setCourses(this.courses);
    })
}
}

