import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTabsComponent } from './sales-tabs.component';

describe('SalesTabsComponent', () => {
  let component: SalesTabsComponent;
  let fixture: ComponentFixture<SalesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
