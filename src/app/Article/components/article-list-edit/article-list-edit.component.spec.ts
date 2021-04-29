import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListEditComponent } from './article-list-edit.component';

describe('ArticleListEditComponent', () => {
  let component: ArticleListEditComponent;
  let fixture: ComponentFixture<ArticleListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
