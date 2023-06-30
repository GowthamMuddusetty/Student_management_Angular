import { RestDataSource } from 'src/app/model/restdatasource';
import { CourseRepository } from './../../model/Repository/course.repository';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 private course:Course=new Course()
 show: boolean = false;

  constructor(private courseRepository:CourseRepository) { }

  ngOnInit(): void {
  }
  saveCourse()
  {

    return this.courseRepository.saveCourse(this.course);
  }
  getCourses()
  {

   return  this.courseRepository.getCourses();
  }
    hide(){
      this.show = !this.show;
    }



}
