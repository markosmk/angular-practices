import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: [],
})
export class SwitchesComponent implements OnInit {
  form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [, Validators.requiredTrue],
    terms: [, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form.setValue(this.person);
    this.form.reset({ ...this.person, terms: false });

    // this.form.valueChanges.subscribe((formData) => {
    // clean with spred operators
    this.form.valueChanges.subscribe(({ terms, ...rest }) => {
      // delete formData.terms;
      this.person = rest;
    });

    // how ear changes in only one field
    this.form.get('terms').valueChanges.subscribe((value) => {
      // console.log(value);
    });
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }

    // remove terms
    const formValue = { ...this.form.value };
    delete formValue.terms;

    this.person = formValue;

    console.log(this.form.value);
  }
}
