import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sales-tabs',
  templateUrl: './sales-tabs.component.html',
  styleUrls: ['./sales-tabs.component.scss']
})
export class SalesTabsComponent implements OnInit {

  tab:any;
  @Input() tabs:any[]=[];
  @Output() tabChangeEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tabChange(tab){

    if(this.tab == tab.label){
      return false;
    }
    this.tab = tab.label;
    console.log('tab',this.tab);
    this.tabChangeEvent.emit(this.tab);
  }
  
}
