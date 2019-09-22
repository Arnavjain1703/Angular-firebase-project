import { Component, OnInit } from '@angular/core';
 import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';


@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {
  courses:CourseUser[];

   constructor(private developmentService:CourseUserService) { }
  

  ngOnInit() {
    this.courses=this.developmentService.getCoursesUser();
  }

}

