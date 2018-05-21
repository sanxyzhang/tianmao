import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNav2Component } from './bottom-nav2.component';

describe('BottomNav2Component', () => {
  let component: BottomNav2Component;
  let fixture: ComponentFixture<BottomNav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
