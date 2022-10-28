import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      email: [, [Validators.required, Validators.pattern(this.validatorSrv.emailPattern)]],
      username: [, [Validators.required, this.validatorSrv.validateUsername]],
      password: [, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [, [Validators.required]],
    },
    {
      validators: [this.validatorSrv.matchFields('password', 'passwordConfirm')],
    }
  );

  constructor(private fb: FormBuilder, private validatorSrv: ValidatorService) {}

  ngOnInit(): void {
    this.form.reset({
      name: 'Marcos Scooby',
      email: 'firulais@mail.com',
      username: 'markosmk',
    });
  }

  validateField(field: string) {
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
