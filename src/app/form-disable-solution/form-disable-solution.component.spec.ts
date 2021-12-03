import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisableSolutionComponent } from './form-disable-solution.component';

describe('FormDisableSolutionComponent', () => {
  let component: FormDisableSolutionComponent;
  let fixture: ComponentFixture<FormDisableSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisableSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisableSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
