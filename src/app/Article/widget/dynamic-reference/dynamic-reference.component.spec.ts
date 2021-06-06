import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReferenceComponent } from './dynamic-reference.component';

describe('DynamicReferenceComponent', () => {
  let component: DynamicReferenceComponent;
  let fixture: ComponentFixture<DynamicReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
