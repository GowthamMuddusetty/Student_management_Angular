import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Administration',
  templateUrl: './Administration.component.html',
  styleUrls: ['./Administration.component.css']
})
export class AdministrationComponent  {

  constructor(private router:Router) { }



  showBranches(event:Event):void{

    console.log("ShowBranches")
    event.preventDefault();
    this.router.navigate(['/app-view-Branches']);
  }

  profile(event:Event):void
  {
console.log("Profile")
event.preventDefault();
this.router.navigate(['/app-profile'])
  }

}
