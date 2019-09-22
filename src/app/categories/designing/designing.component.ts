import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';

@Component({
  selector: 'app-designing',
  templateUrl: './designing.component.html',
  styleUrls: ['./designing.component.css']
})
export class DesigningComponent implements OnInit {
  courses:CourseUser[];

  constructor(private designService:CourseUserService) { }
 

 ngOnInit() {
   this.courses=this.designService. getCoursesUser();
 }

}
