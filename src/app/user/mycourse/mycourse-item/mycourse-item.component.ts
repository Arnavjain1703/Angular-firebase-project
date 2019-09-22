import { Component, OnInit ,Input} from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';

@Component({
  selector: 'app-mycourse-item',
  templateUrl: './mycourse-item.component.html',
  styleUrls: ['./mycourse-item.component.css']
})
export class MycourseItemComponent implements OnInit {
  show=false;
  descrip=false
  @Input () course:CourseUser;
  @Input()index:number;
  constructor() { }

  ngOnInit() {
  }
  description()
  {
     this.descrip=!this.descrip;
  }

}
