import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LoginComponent } from './login/login.component';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { UserCourseListComponent } from './user/user-course-list/user-course-list.component';
import { UsercartComponent } from './user/usercart/usercart.component';
import { MycourseComponent } from './user/mycourse/mycourse.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { WebDevelopmentComponent } from './categories/web-development/web-development.component';
import { CraftComponent } from './categories/craft/craft.component';
import { DesigningComponent } from './categories/designing/designing.component';
import { MusicComponent } from './categories/music/music.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes=[
    {path:'',redirectTo: 'frontpage', pathMatch:'full'}, 
    {path: 'courselist', component:CourseListComponent,
    },
    {path:'courselist/:id/edit',component:CourseEditComponent},
    {path:'new',component:CourseEditComponent},
    {path:'login',component:LoginComponent},
    {path:'usercourse',component:UserCourseComponent},
    {path:'usercourse/usercourselist',component:UserCourseListComponent,
     },
    {path:'usercart',component:UsercartComponent},
    {path:'usermycourse',component:MycourseComponent},
    {path:'frontpage',component:FrontPageComponent},
    {path:'webdevelopment', component:WebDevelopmentComponent},
    {path:'craft',component:CraftComponent},
    {path:'designing',component:DesigningComponent},
    {path:'music',component:MusicComponent},
    {path:'signup',component:SignupComponent}

  
 
]
@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
    )
    
    export class AppRoutingModule
    {
    
    }
     