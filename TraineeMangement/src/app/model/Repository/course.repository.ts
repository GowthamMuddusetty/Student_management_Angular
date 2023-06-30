import { RestDataSource } from './../restdatasource';
import { Injectable } from '@angular/core';
import { Course } from '../course';


@Injectable()
export class CourseRepository
{

 public courses:Course[]=[]
  constructor(private restData:RestDataSource)
  {
    this.restData.getCourses().subscribe(data=>
      {
        this.courses=data;
        console.log(data)
      },error=>
      console.log(error)

      )

  }
  saveCourse(course:Course)
  {
    this.restData.saveCourse(course).subscribe(data=>
      {
        console.log(data)
      },error=>
      console.log(error)

      )

  }
  getCourses()
  {
   return this.courses;

  }





}
