
import { Subject } from 'rxjs';
import { CourseUser } from './shared/courseuser.module';


export class CourseService{
    coursesChanged=new Subject<CourseUser[]>();

private courses: CourseUser[]=[
    new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg', 446,'WebDevelopment','https://www.youtube.com/watch?v=1qcbGHbb5n4&t=441s'),

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