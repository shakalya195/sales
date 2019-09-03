import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTwoComponent } from './block-two.component';

describe('BlockTwoComponent', () => {
  let component: BlockTwoComponent;
  let fixture: ComponentFixture<BlockTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
