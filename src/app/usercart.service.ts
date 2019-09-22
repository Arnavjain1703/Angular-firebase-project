import { CourseUser } from './shared/courseuser.module';
import { Subject } from 'rxjs';

export class UserCartService{
  cartChanged=new Subject<CourseUser[ ]>();

   private courses:CourseUser[]=[   


    ];
   
  getUserCart()
  {
      return this.courses.slice();
  } 
  addCourse(course:CourseUser){
    this.courses.push(course);
    this.cartChanged.next(this.courses.slice());
  }
  deleteCraft(index:number)
  {
   this.courses.splice(index,1);
   this.cartChanged.next(this.courses.slice())
  }

  setCourses(courses:CourseUser[])
{
   this.courses=courses;
 this.cartChanged.next(this.courses.slice());

}
  

}
