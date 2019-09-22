import { CourseUser } from './shared/courseuser.module';
import { Subject } from 'rxjs';


export class MyCourseService
{
    mycoursesChanged=new Subject<CourseUser[ ]>();

    private courses: CourseUser[]=[
        new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg', 446,'WebDevelopment','https://www.youtube.com/watch?v=1qcbGHbb5n4&t=441s'),
    ]
    getMyCoursesUser()
    {
        return this.courses.slice();
    }
    addMyCourseUser(course:CourseUser)
    {
    this.courses.push(course);
    this.mycoursesChanged.next(this.courses.slice())
     }
     setCourses(courses:CourseUser[])
     {
         this.courses=courses;
         this.mycoursesChanged.next(this.courses.slice())
                  
     }

}