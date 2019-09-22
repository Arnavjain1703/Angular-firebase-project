import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {
  courses:CourseUser[];
  constructor(private courseService:MyCourseService) { }

  

  ngOnInit() {
this.courses=this.courseService. getMyCoursesUser();

  }

}







  