import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})
export class CraftComponent implements OnInit {

  courses:CourseUser[];

  constructor(private designService:CourseUserService) { }
 

 ngOnInit() {
   this.courses=this.designService.getCoursesUser();
 }

}
