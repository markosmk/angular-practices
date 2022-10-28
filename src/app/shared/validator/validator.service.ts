import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  validateUsername(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim();
    if (value === 'scooby') {
      return { noScooby: true };
    }
    // console.log(value);
    return null; // when if not error founded
  }

  matchFields(field1: string, field2: string) {
    // just have to call the function reference
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2).setErrors({ notMatch: true }); // send errors to control field2
        return { notMatch: true };
      }
      formGroup.get(field2).setErrors(null); // reset fields // Carefully
      return null;
    };
  }
}
