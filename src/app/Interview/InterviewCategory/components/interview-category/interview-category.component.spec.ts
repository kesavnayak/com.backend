import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCategoryComponent } from './interview-category.component';

describe('InterviewCategoryComponent', () => {
  let component: InterviewCategoryComponent;
  let fixture: ComponentFixture<InterviewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
