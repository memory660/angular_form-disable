import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-disable-solution',
  templateUrl: './form-disable-solution.component.html',
  styleUrls: ['./form-disable-solution.component.scss'],
})
export class FormDisableSolutionComponent implements OnInit {
  form!: FormGroup;
  isformValid!: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [{ value: 'Foo', disabled: true }, [Validators.required]],
      lastName: ['Bar'],
    });

    // this.lastName.disable();

    //  solution :
    //  [attr.disabled]="true"
    //    ou
    //  readonly="true"
    console.log(this.lastName);
    console.log('Form:::', this.form);
  }

  onSubmit(): void {
    this.isformValid = this.form.valid;

    if (this.form.valid) {
    }
  }

  get firstName(): FormControl {
    return this.form.controls['firstName'] as FormControl;
  }

  get lastName(): FormControl {
    return this.form.controls['lastName'] as FormControl;
  }
}
