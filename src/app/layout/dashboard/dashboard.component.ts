import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private api:ApiService
  ) { }

  filterTabs:any[];
  levelTabs:any[];
  dashboardData:any;

  ngOnInit() {
    this.filterTabs = [
      {label:'TODAY'},
      {label:'LAST WEEK'},
      {label:'LAST MONTH'},
      {label:'LAST QUARTER'},
      {label:'THIS YEAR'},
    ];
    this.levelTabs = [
      {label:'TOP'},
      {label:'BOTTOM'},
    ];

    this.dashboardData={
      funnelData:{
        leadIn:25,
        contactMade:18,
        needsDefined:12,
        proposalMade:8,
        negotiationsStarted:5,
        won:3,
      },
      callData:[
        {
          image:'assets/img/ico-calls.png',
          label:'calls',
          value:10,
          total:15
        },
        {
          image:'assets/img/ico-wins.png',
          label:'wins',
          value:10,
          total:15
        },
        {
          image:'assets/img/ico-revenue.png',
          label:'incremented revenue',
          value:80000,
          total:100000
        },
      ],
      topUserData:[
        {
          name:'John Doe',
          newMrr:5230,
          newLogos:102,
          demoCalls:30
        },
        {
          name:'Jane Smith',
          newMrr:4586,
          newLogos:95,
          demoCalls:23
        },
        {
          name:'Ethan Hunt',
          newMrr:3500,
          newLogos:82,
          demoCalls:10
        },
      ]
    }

    this.api.getData('/dashboard',{}).subscribe(r=>{
      this.dashboardData = {};
    });

  }

  filterTabsChange(event){
    console.log(event);
  }

  levelTabsChange(event){
    console.log(event);
  }

}
