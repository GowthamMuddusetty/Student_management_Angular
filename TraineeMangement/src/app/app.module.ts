import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Admin_Module/login/login.component';
import { BatchComponent } from './Batch_Module/batch/batch.component';
import { CourseComponent } from './Batch_Module/course/course.component';
import { SubjectComponent } from './Batch_Module/subject/subject.component';
import { TopicsComponent } from './Batch_Module/topics/topics.component';
import { BatchHomeComponent } from './Batch_Module/batch-home/batch-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ModelModule } from './model/model.module';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BatchComponent,
    CourseComponent,
    SubjectComponent,
    TopicsComponent,
    BatchHomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule ,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ModelModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
