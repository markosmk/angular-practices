import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
}
