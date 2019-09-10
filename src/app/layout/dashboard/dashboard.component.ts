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
  engagementStatus:any;
  topBottomSalesRep:any = {top:[],bottom:[]};
  users:any[];
  callsWinsAndRevenue:any[]=[];
  filterTab:any;
  levelTab:any;

  salesReps:any[]=[];
  salesRep:any;

  constructor(
    private api:ApiService
  ) { }

  ngOnInit() {
    this.salesReps = [
      {label:'All sales reps',value:''},
      {label:'Marketing',value:'Marketing'},
      {label:'Sales',value:'Sales'},
      {label:'Technology',value:'Technology'}
    ]

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


    this.engagementStatus = {
        leadIn:25,
        contactMade:18,
        needsDefined:12,
        proposalMade:8,
        negotiationsStarted:5,
        won:3,
      };


    this.callsWinsAndRevenue=[
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
    ];

    this.topBottomSalesRep.top = [
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


    this.getList();
    
  }

  getList(){
    let input:any={};
    let today = new Date();
    if(this.filterTab){
      switch(this.filterTab){
        case 'LAST WEEK':
          input.daysFilter = 7;
          break;
        case 'LAST MONTH':
          input.daysFilter = 30;
          break;
        case 'LAST QUARTER':
          input.daysFilter = 120;
          break;
        case 'THIS YEAR':
          input.daysFilter = 365;
          break;
        default: 
          input.daysFilter = 0;
      }
    }

    if(this.salesRep){
      input.salesRep = this.salesRep;
    }
    console.log(input);
    this.api.getData('/dashboard',input).subscribe(r=>{
      console.log(r);
      this.dashboardData = r.data;
      this.engagementStatus = r.engagementStatus;
      this.callsWinsAndRevenue = r.callsWinsAndRevenue;
      this.topBottomSalesRep = r.topBottomSalesRep
    });
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  filterTabsChange(event){
    console.log(event);
    this.filterTab = event;
    this.getList();
  }

  levelTabsChange(event){
    console.log(event);
    this.levelTab = event;
    // this.getList();
  }

  changeSalesRep(item){
    this.salesRep = item.value;
    this.getList();
  }

}
