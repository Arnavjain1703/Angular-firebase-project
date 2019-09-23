import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
import { CourseUser } from './courseuser.module';
import { CourseUserService } from '../courseuser.service';


import { UserCartService } from '../usercart.service';
import { MyCourseService } from '../mycourse.sercice';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService
{
  tk:any;
  user:string;

  courses:CourseUser[];

  private rootUrl="https://angular-project-2c6cf.firebaseio.com"
constructor(private http:HttpClient,private courseService:CourseService,
            private courseuserService:CourseUserService,
            private userCartService:UserCartService,
            private myCourseService:MyCourseService,
            private authService:AuthService){}

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
  return this.http.put( this.rootUrl+'/'+localStorage.getItem('userId')+'/UserCart.json',this.userCartService.getUserCart())
}
myCourses()
{
   return this.http.put(this.rootUrl+'/'+localStorage.getItem('userId')+'/Mycourse.json',this.myCourseService.getMyCoursesUser())
}
getCourses()
{
 return  this.http.get(this.rootUrl+'/'+localStorage.getItem('userId')+'/courselist.json')
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

  return this.http.get(this.rootUrl+'/'+localStorage.getItem('userId')+'/UserCart.json')
  .subscribe(
    response =>
    {this.userCart
      this.tk=response;
      this.courses=this.tk;
      this.userCartService.setCourses(this.courses);
    })
}
getmyCourses()
{
  return this.http.get(this.rootUrl+'/'+localStorage.getItem('userId')+'/Mycourse.json')
  .subscribe(
    response =>
    {
      this.tk=response;
      this.courses=this.tk;
      this.myCourseService.setCourses(this.courses);
    })
}
}

