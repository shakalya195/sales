import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  filterTabs:any[];

  ngOnInit() {
    this.filterTabs = [
      {label:'TODAY'},
      {label:'LAST WEEK'},
      {label:'LAST MONTH'},
      {label:'LAST QUARTER'},
      {label:'THIS YEAR'},
    ];
  }

  filterTabsChange(event){
    console.log(event);
  }


}
