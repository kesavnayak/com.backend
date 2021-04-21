import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCategoryEditComponent } from './interview-category-edit.component';

describe('InterviewCategoryEditComponent', () => {
  let component: InterviewCategoryEditComponent;
  let fixture: ComponentFixture<InterviewCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
