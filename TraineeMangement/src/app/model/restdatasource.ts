
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course';
import { Observable } from "rxjs";
@Injectable()
export class RestDataSource{
  private url: string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient,private router:Router){

}


  // get courses
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.url}courseinsertandgettingall/`)
  }

  // // Get course by id
  // getCourseById(courseId: number): Observable<Course> {
  //   return this.http.get<Course>(`${this.url}courseupdateanddeleteandretraivebyid/${courseId}`);
  // }

  // Add course
  saveCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.url}courseinsertandgettingall/`, course);
  }

  // // Update course
  // updateCourse(courseId: number, course: Course): Observable<Course>{
  //   return this.http.put<Course>(`${this.url}courseupdateanddeleteandretraivebyid/${courseId}`, course);
  // }

  // // Delete course
  // deleteCourse(courseId: number): Observable<Course> {
  //   return this.http.delete<Course>(`${this.url}courseupdateanddeleteandretraivebyid/${courseId}`);
  // }


}


