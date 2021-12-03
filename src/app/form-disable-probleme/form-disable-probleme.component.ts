import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-disable-probleme',
  templateUrl: './form-disable-probleme.component.html',
  styleUrls: ['./form-disable-probleme.component.scss'],
})
export class FormDisableProblemeComponent implements OnInit {
  form!: FormGroup;
  isformValid!: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [{ value: 'Foo', disabled: true }, [Validators.required]],
      lastName: ['Bar'],
    });

    this.lastName.disable();
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
