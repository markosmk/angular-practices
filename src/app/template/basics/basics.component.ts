import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  initialForm = {
    product: 'sdad',
    price: 123,
    quantity: 342333,
  };

  constructor() {}

  ngOnInit(): void {}

  validateName(): boolean {
    return this.form?.controls.product?.touched && this.form?.controls.product?.invalid;
  }
  validatePrice(): boolean {
    // this.form?.controls.price?.setErrors({ price: true });
    return this.form?.controls.price?.touched && this.form?.controls.price.value < 0;
  }

  onSubmit() {
    // onSubmit(form: NgForm) {
    console.log(this.form);
    this.form.resetForm({
      price: 0,
      quantity: 0,
    });
  }
}
