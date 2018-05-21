import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywithcarouselComponent } from './categorywithcarousel.component';

describe('CategorywithcarouselComponent', () => {
  let component: CategorywithcarouselComponent;
  let fixture: ComponentFixture<CategorywithcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywithcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywithcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
