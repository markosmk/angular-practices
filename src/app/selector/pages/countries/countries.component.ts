import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [],
})
export class CountriesComponent implements OnInit {
  form: FormGroup = this.fb.group({
    continent: ['', Validators.required],
  });

  regions: string[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {}

  ngOnInit(): void {
    this.regions = this.countryService.regions;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
