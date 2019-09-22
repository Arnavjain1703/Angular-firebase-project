import { Subject } from 'rxjs';
import { CourseUser } from './shared/courseuser.module';



export class CourseUserService{
    coursesUserChanged=new Subject<CourseUser[ ]>();

private courses: CourseUser[]=[
    
]


getCoursesUser()
{
    return this.courses.slice();
}
getCourseUser(index:number)
{
    return this.courses.slice()[index];
}
addCourseUser(course:CourseUser)
{
 this.courses.push(course);
 this.coursesUserChanged.next(this.courses.slice())
}
updateCourseUser(index:number,newCourse:CourseUser)
{
  this.courses[index]=newCourse;
  this.coursesUserChanged.next(this.courses.slice())

}
deleteCourseUser(index:number){
    this.courses.splice(index,1);
 this.coursesUserChanged.next(this.courses.slice());
}
setCourses(courses:CourseUser[])
{
   this.courses=courses;
 this.coursesUserChanged.next(this.courses.slice());

}

}