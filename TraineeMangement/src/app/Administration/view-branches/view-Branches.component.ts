import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-Branches',
  templateUrl: './view-Branches.component.html',
  styleUrls: ['./view-Branches.component.css']
})
export class ViewBranchesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
addBranch():void
{

this.router.navigate(['/app-add-branch'])
console.log("add Branch")
}

viewBracnh():void{
  this.router.navigate(['/app-branch-view'])
  console.log("view Branch")
}
}
