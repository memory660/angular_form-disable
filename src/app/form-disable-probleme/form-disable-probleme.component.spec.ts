import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisableProblemeComponent } from './form-disable-probleme.component';

describe('FormDisableProblemeComponent', () => {
  let component: FormDisableProblemeComponent;
  let fixture: ComponentFixture<FormDisableProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisableProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisableProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
