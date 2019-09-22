import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
import { CourseUser } from './courseuser.module';
import { CourseUserService } from '../courseuser.service';

import { Observable } from 'rxjs';
import { UserCartService } from '../usercart.service';

@Injectable()
export class DataStorageService
{
  tk:any;
  courses:CourseUser[]
  private rootUrl="https://angular-project-2c6cf.firebaseio.com"
constructor(private http:HttpClient,private courseService:CourseService,
   private courseuserService:CourseUserService,
   private userCartService:UserCartService){}
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
getCourses()
{
 return  this.http.get('https://angular-project-2c6cf.firebaseio.com/courselist.json')
 .subscribe(
   response =>
   {
     this.tk=response;
     this.courses=this.tk;
     this.courseService.setCourses(this.courses);
   }
 ) 
}
}

