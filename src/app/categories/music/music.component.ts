import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  courses:CourseUser[];

  constructor(private musicService:CourseUserService) { }
 

 ngOnInit() {
   this.courses=this.musicService.getCoursesUser();;
 }

}
