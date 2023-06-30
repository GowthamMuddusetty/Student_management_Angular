import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.css']
})
export class BranchViewComponent implements OnInit {

  items: any[] = [
    { id: 1, location: 'Banglore', branch: 'Marathahalli' },
    { id: 2, location: 'Hyderabad', branch: 'JNTU' },
    { id: 3, location: 'Vishakapatnam', branch: 'MVP' },
    { id: 4, location: 'Hyderabad', branch: 'KUkatpally' },
    { id: 5, location: 'Hyderabad', branch: 'Dilshuknagar' },
    { id: 6, location: 'Banglore', branch: 'BTM' },
    { id: 7, location: 'Banglore', branch: 'Kadugodi' },
    { id: 8, location: 'Chennai', branch: 'T.Nagar' }
  ];

  searchQuery: string = '';
  tableData: any;
  row:any;


  constructor() { }

  ngOnInit() {
  }


  get filteredItems(): any[] {
    return this.items.filter(item =>
      item.id.toString().includes(this.searchQuery) ||
      item.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.branch.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onDelete(): void {

    }

}

