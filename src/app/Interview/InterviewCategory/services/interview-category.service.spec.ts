import { TestBed } from '@angular/core/testing';

import { InterviewCategoryService } from './interview-category.service';

describe('InterviewCategoryService', () => {
  let service: InterviewCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
