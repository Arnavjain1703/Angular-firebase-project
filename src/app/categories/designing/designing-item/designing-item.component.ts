import { Component, OnInit,Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';
import { MyCourseService } from 'src/app/mycourse.sercice';

@Component({
  selector: 'app-designing-item',
  templateUrl: './designing-item.component.html',
  styleUrls: ['./designing-item.component.css']
})
export class DesigningItemComponent implements OnInit {
  show=false;
  @Input () course:CourseUser;
  @Input()index:number;
  constructor(private acService:UserCartService,private mcService:MyCourseService
        ) { }

  ngOnInit() {
  }
  onAddToCart(){
  this.acService.addCourse(this.course);
  }
  onAddToMyCourse()
  {
        this.mcService.addMyCourseUser(this.course);
  }
  shows()
  {
   this.show=!this.show;
  }
}


