import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrationComponent } from './Administration/Administration.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ViewBranchesComponent } from './Administration/view-branches/view-Branches.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AddBranchComponent } from './Administration/view-branches/add-branch/add-branch.component';
import { BranchViewComponent } from './Administration/view-branches/branch-view/branch-view.component';
@NgModule({
  declarations: [
    AppComponent,
      AdministrationComponent,
      ViewBranchesComponent,
      AddBranchComponent,
      BranchViewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
