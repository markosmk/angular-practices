import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css'],
})
export class DynamicsComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Metal Gears', Validators.required],
        ['Matrix', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArray() {
    return this.form.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  validateField(field: string) {
    // return this.form.controls[field].errors && this.form.controls[field].touched;

    return this.form.controls[field].invalid && (this.form.controls[field].touched || this.form.controls[field].dirty); // for all messages
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    // add value to form builder
    // this.favoritesArray.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArray.push(this.fb.control(this.newFavorite.value, Validators.required));

    // empty input
    this.newFavorite.reset();
  }

  deleteFavorite(idx: number) {
    this.favoritesArray.removeAt(idx);
  }
}
