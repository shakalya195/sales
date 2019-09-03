import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOneComponent } from './block-one.component';

describe('BlockOneComponent', () => {
  let component: BlockOneComponent;
  let fixture: ComponentFixture<BlockOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
