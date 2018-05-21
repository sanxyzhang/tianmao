import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNav1Component } from './bottom-nav1.component';

describe('BottomNav1Component', () => {
  let component: BottomNav1Component;
  let fixture: ComponentFixture<BottomNav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
