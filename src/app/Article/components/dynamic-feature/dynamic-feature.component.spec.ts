import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFeatureComponent } from './dynamic-feature.component';

describe('DynamicFeatureComponent', () => {
  let component: DynamicFeatureComponent;
  let fixture: ComponentFixture<DynamicFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
