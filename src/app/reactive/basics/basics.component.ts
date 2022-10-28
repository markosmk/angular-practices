import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: [],
})
export class BasicsComponent implements OnInit {
  // form: FormGroup = new FormGroup({
  //   name    : new FormControl('RTX 5080ti'),
  //   price   : new FormControl(0),
  //   quantity: new FormControl(2),
  // });
  form: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    quantity: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // with reset() instead of setValue() we can initialize values in optionals fields
    this.form.reset({
      name: 'RTSRAT',
      price: 1600,
    });
  }

  fieldIsValid(field: string) {
    return this.form.controls[field].errors && this.form.controls[field].touched;
  }
  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.form.reset();
    console.log(this.form.value);
  }
}
