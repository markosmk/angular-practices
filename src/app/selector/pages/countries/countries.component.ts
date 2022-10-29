import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { CountrySmall } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [],
})
export class CountriesComponent implements OnInit {
  form: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    frontier: ['', Validators.required],
  });

  regions: string[] = [];
  countries: CountrySmall[] = [];
  frontiers: [] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {}

  ngOnInit(): void {
    this.regions = this.countryService.regions;

    // when change region
    // this.form.get('region')?.valueChanges.subscribe((region) => {
    //   console.log(region);
    //   this.countryService.getCountriesByRegion(region).subscribe((items: CountrySmall[]) => {
    //     console.log(items);
    //     this.countries = items;
    //   });
    // });

    // with rxjs
    this.form
      .get('region')
      ?.valueChanges.pipe(
        tap((_region) => {
          this.form.get('country').reset('');
        }), // generate effect secondary
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
