import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.scss']
})
export class BlockTwoComponent implements OnInit {

  @Input() item:any; 
  constructor() { }

  ngOnInit() {
  }

}
