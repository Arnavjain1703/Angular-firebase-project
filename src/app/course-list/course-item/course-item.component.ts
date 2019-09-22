import { Component, OnInit, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input () course:CourseUser;
  @Input()index:number;
  constructor() { }

  ngOnInit() {
  }

}
