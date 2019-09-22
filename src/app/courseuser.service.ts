import { Subject } from 'rxjs';
import { CourseUser } from './shared/courseuser.module';



export class CourseUserService{
    coursesUserChanged=new Subject<CourseUser[ ]>();

private courses: CourseUser[]=[
    new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg', 446,'WebDevelopment','https://www.youtube.com/watch?v=1qcbGHbb5n4&t=441s'),
    
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

}