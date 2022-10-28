import { FormControl } from '@angular/forms';

export const fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$';

export const validateUsername = (control: FormControl) => {
  const value: string = control.value?.trim();
  if (value === 'scooby') {
    return { noScooby: true };
  }
  console.log(value);
  return null; // when if not error founded
};
