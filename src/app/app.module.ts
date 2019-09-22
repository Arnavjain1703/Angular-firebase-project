import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseService } from './course.service';
import { CourseUserService } from './courseuser.service';

import { CourseEditComponent } from './course-edit/course-edit.component';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserCourseListComponent } from './user/user-course-list/user-course-list.component';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { UserCourseItemComponent } from './user/user-course-list/user-course-item/user-course-item.component';
import { UsercartComponent } from './user/usercart/usercart.component';
import { UserCartService } from './usercart.service';
import { UsercartitemComponent } from './user/usercart/usercartitem/usercartitem.component';
import { MycourseComponent } from './user/mycourse/mycourse.component';
import { MycourseItemComponent } from './user/mycourse/mycourse-item/mycourse-item.component';
import { MyCourseService } from './mycourse.sercice';
import { FrontPageComponent } from './front-page/front-page.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { WebDevelopmentComponent } from './categories/web-development/web-development.component';
import { WebItemComponent } from './categories/web-development/web-item/web-item.component';
import { DesigningComponent } from './categories/designing/designing.component';
import { DesigningItemComponent } from './categories/designing/designing-item/designing-item.component';
import { CraftComponent } from './categories/craft/craft.component';
import { CraftItemComponent } from './categories/craft/craft-item/craft-item.component';
import { MusicComponent } from './categories/music/music.component';
import { MusicItemComponent } from './categories/music/music-item/music-item.component';
import { Header2Component } from './header2/header2.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseItemComponent,
    CourseEditComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    UserCourseListComponent,
    UserCourseComponent,
    UserCourseItemComponent,
    UsercartComponent,
    UsercartitemComponent,
    MycourseComponent,
    MycourseItemComponent,
    FrontPageComponent,
    DropdownDirective,
    WebDevelopmentComponent,
    WebItemComponent,
    DesigningComponent,
    DesigningItemComponent,
    CraftComponent,
    CraftItemComponent,
    MusicComponent,
    MusicItemComponent,
    Header2Component,
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CourseService,CourseUserService,UserCartService,MyCourseService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
