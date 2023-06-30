import { AddBranchComponent } from './Administration/view-branches/add-branch/add-branch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBranchesComponent } from './Administration/view-branches/view-Branches.component';
import { BranchViewComponent } from './Administration/view-branches/branch-view/branch-view.component';
import { ProfileComponent } from './Administration/profile/profile.component';

const routes: Routes = [

  { path: 'app-view-Branches', component: ViewBranchesComponent },
  {path:'app-add-branch',component:AddBranchComponent},
  {path:'app-branch-view', component:BranchViewComponent},
  {path:'app-profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
