import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterTabs:any[];
  levelTabs:any[];
  dashboardData:any;
  userDataTop:any[];
  users:any[];

  filterTab:any;
  levelTab:any;

  constructor(
    private api:ApiService
  ) { }

  ngOnInit() {
    this.filterTabs = [
      {label:'TODAY'},
      {label:'LAST WEEK'},
      {label:'LAST MONTH'},
      {label:'LAST QUARTER'},
      {label:'THIS YEAR'},
    ];
    this.filterTab='TODAY'

    this.levelTabs = [
      {label:'TOP'},
      {label:'BOTTOM'},
    ];
    this.levelTab= 'TOP';

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
    }


    this.userDataTop = [
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

  getList(){
    let input:any={};
    let today = new Date();
    if(this.filterTab){
      switch(this.filterTab){
        case 'LAST WEEK':
          input.startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
          input.endDate = today
          break;
        case 'LAST MONTH':
          input.startDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          input.endDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          break;
        case 'LAST QUARTER':
          input.startDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          input.endDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          break;
        case 'THIS YEAR':
          input.startDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          input.endDate = new Date(today.getFullYear(), today.getMonth() -1 , today.getDate());
          break;
        default: 
          input.startDate = today
          input.endDate = today
      }
    }
    console.log(input);
    this.api.getData('/dashboard',input).subscribe(r=>{
      this.dashboardData = {};
    });
  }

  filterTabsChange(event){
    console.log(event);
    this.filterTab = event;
    this.getList();
  }

  levelTabsChange(event){
    console.log(event);
    this.levelTab = event;
    this.getList();
  }


}
