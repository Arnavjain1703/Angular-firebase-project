
import { Subject } from 'rxjs';
import { CourseUser } from './shared/courseuser.module';


export class CourseService{
    coursesChanged=new Subject<CourseUser[]>();

private courses: CourseUser[]=[

]

setCourses(courses:CourseUser[])
{
     this.courses =courses;
 this.coursesChanged.next(this.courses.slice())


}
getCourses()
{
    return this.courses.slice();

}
getCourse(index:number)
{
    return this.courses.slice()[index];
}
addCourse(course:CourseUser)
{
 this.courses.push(course);
 this.coursesChanged.next(this.courses.slice())
}
updateCourse(index:number,newCourse:CourseUser)
{
  this.courses[index]=newCourse;
  this.coursesChanged.next(this.courses.slice())

}
deleteCourse(index:number){
    this.courses.splice(index,1);
 this.coursesChanged.next(this.courses.slice());
}


}