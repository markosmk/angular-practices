import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validateField(field: string) {
    return this.form.get(field).invalid && (this.form.get(field).touched || this.form.get(field).dirty);
  }

  save() {
    console.log(this.form.value);
  }
}
