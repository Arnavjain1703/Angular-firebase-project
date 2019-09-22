import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { CourseUserService } from '../courseuser.service';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  id:number;
  editMode=false;

  courseForm:FormGroup;

  constructor( private courseService:CourseService,
              private courseUserService:CourseUserService,
              

               private route:ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.initForm();});
      // this.dataStorageService.getCourses()
      // .subscribe(Response=>{
      //   this.courses=Response;
      // })
     
      
      

    
  }
  
  onCancle()
  {
    this.router.navigate(['/courselist']);
  }
  
    onDelete()
    {
      
    }
    
  
  onSubmit()
  {
    
  
    
    if(this.editMode)
    {
      this.courseService.updateCourse(this.id,this.courseForm.value);
      this.courseUserService.updateCourseUser(this.id,this.courseForm.value);

    }
    else{
      this.courseService.addCourse(this.courseForm.value);
      this.courseUserService.addCourseUser(this.courseForm.value);

    }
   this.onCancle();
  }
  private initForm()
  {
    let courseName='';
    let courseDescription='';
    let courseImagePath='';
    let coursePrice=0;
    let courseCategory='';
    let courseVideoPath='';
    if(this.editMode)
    {
      const course=this.courseService.getCourse(this.id)
      courseName=course.name;
      courseDescription=course.description;
      courseImagePath=course.imagePath;
      coursePrice=course.price;
      courseCategory=course.category;
      courseVideoPath=course.videoPath;

    }
    this.courseForm=new FormGroup({
      'name': new FormControl(courseName,Validators.required),
      'imagePath':new FormControl(courseImagePath,Validators.required),
      'description':new FormControl(courseDescription,Validators.required),
      'price':new FormControl(coursePrice,Validators.required),
       'category':new FormControl(courseCategory),
       'videoPath':new FormControl(courseVideoPath,Validators.required)
     
    })
  }

}
