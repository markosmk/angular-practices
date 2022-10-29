import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      name: [, [Validators.required, Validators.pattern(this.validatorSrv.fullNamePattern)]],
      email: [, [Validators.required, Validators.pattern(this.validatorSrv.emailPattern)], [this.emailValidator]],
      username: [, [Validators.required, this.validatorSrv.validateUsername]],
      password: [, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [, [Validators.required]],
    },
    {
      validators: [this.validatorSrv.matchFields('password', 'passwordConfirm')],
    }
  );

  // new show errors with less html
  get nameErrorMsg(): string {
    const errors = this.form.get('name')?.errors;
    if (errors?.required) {
      return 'The Name is Required';
    } else if (errors?.pattern) {
      return 'Only allow FirstName and LastName';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorSrv: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.form.reset({
      name: 'Marcos Scooby',
      email: 'firulais@mail.com',
      username: 'markosmk',
    });
  }

  validateField(field: string, type?: string) {
    if (type) {
      return this.form.get(field)?.errors?.[type] && (this.form.get(field)?.touched || this.form.get(field)?.dirty); // set error when iterating with the input
    }
    return this.form.get(field)?.invalid && (this.form.get(field)?.touched || this.form.get(field)?.dirty);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
