import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {


  public addLocation:any;
  selectedLocation?:string;
  myForm!: FormGroup;
  locations:string[]=[
    'Vishakapatnam',
    'Hyderabad',
    'Banglore',
    'Maharastra',
    'Chennai',
    'Rajastan',
    'Kerala'
   ]


  constructor(private dialog: MatDialog,private formBuilder: FormBuilder) {
    this.myForm=this.formBuilder.group({
      name:[''],
    })
   }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      selectedLocation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  openAddBranchDialog(): void {
    this.dialog.open(AddBranchComponent);
  }
  addBranch(ngForm:NgForm){

  }

  onSubmit()
  {
    if(this.myForm?.valid)
    {
      console.log('Form submitted successfully')
    }

  }

  onReset()
  {
      this.myForm?.reset();
  }


  convertToUppercase() {
    throw new Error('Method not implemented.');
    }
}
