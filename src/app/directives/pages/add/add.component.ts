import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  // defaults
  message: string = 'Message Default';
  color: string = 'pink';

  form: FormGroup = this.fb.group({
    name: [, Validators.required],
    category: [, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validateField(field: string) {
    return this.form.get(field).invalid && (this.form.get(field).touched || this.form.get(field).dirty);
  }

  save() {
    console.log(this.form.value);
  }

  changeColor() {
    this.color = Math.floor(Math.random() * 16777215).toString(16);
  }

  changeMessage() {
    this.message = 'Texto Cambiado ' + Math.random();
  }
}
