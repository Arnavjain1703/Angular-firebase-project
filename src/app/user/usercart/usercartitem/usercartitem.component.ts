import { Component, OnInit ,Input} from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { UserCartService } from 'src/app/usercart.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
@Component({
  selector: 'app-usercartitem',
  templateUrl: './usercartitem.component.html',
  styleUrls: ['./usercartitem.component.css']
})
export class UsercartitemComponent implements OnInit {
  
  @Input () course:CourseUser;
  @Input()index:number;
  constructor( private csservice:UserCartService,
              private myCourse:MyCourseService,
              private dataStorageService:DataStorageService) { }

  descrip=false;
  ngOnInit() {
  }

  
  onDelete()
  {
    this.csservice.deleteCraft(this.index);
  
  }
  
  onAddToMyCourse()
  {
    this.myCourse.addMyCourseUser(this.course)
  }
  description()
  {
     this.descrip=!this.descrip;
  }
  onSaveData()
 {
   this.dataStorageService.userCart().subscribe(
    (response:Response)=>
   {
      console.log(response);
   }
  );
 }
 onSaveMyCourseData()
  { 
    
  this.dataStorageService.myCourses()
   .subscribe(
     (response:Response)=>
    {
       console.log(response);
    }
   );
  
}
}