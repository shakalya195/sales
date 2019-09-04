import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.scss']
})
export class BlockOneComponent implements OnInit {

  @Input() item:any; 

  constructor() { }

  ngOnInit() {
  }

}
