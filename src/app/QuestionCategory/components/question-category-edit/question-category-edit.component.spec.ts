import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryEditComponent } from './question-category-edit.component';

describe('QuestionCategoryEditComponent', () => {
  let component: QuestionCategoryEditComponent;
  let fixture: ComponentFixture<QuestionCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
