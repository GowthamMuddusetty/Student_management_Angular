import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";


import { RestDataSource } from "./restdatasource";
import { CourseRepository } from "./Repository/course.repository";


@NgModule({
    imports:[HttpClientModule],
    providers:[RestDataSource,CourseRepository]
  })
  export class ModelModule{}
