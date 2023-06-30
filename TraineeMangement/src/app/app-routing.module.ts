import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchHomeComponent } from './Batch_Module/batch-home/batch-home.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './Batch_Module/course/course.component';

const routes: Routes = [
  {
    path:"home",component:AppComponent,
  },
  {
    path:"batchhome",component:BatchHomeComponent,
 children:[
      {
    path:"course",component:CourseComponent,
    },
    {
      path:"viewcourses",component:CourseComponent,
      },


    ],

 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
