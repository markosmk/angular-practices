import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { Country, CountrySmall } from '../../interfaces/country.interface';
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
  frontiers: string[] = [];

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
    this.form.get('frontier').disable();
    this.form.get('country').disable();

    // with rxjs
    this.form
      .get('region')
      ?.valueChanges.pipe(
        tap((region: string) => {
          const refCountry = this.form.get('country');
          refCountry.reset('');
          if (region?.length) {
            refCountry.enable();
          } else {
            refCountry.disable();
          }
        }), // generate effect secondary
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((countries) => {
        this.countries = countries;
      });

    this.form
      .get('country')
      ?.valueChanges.pipe(
        tap((country: string) => {
          this.frontiers = [];
          const refFrontier = this.form.get('frontier');
          refFrontier.reset('');
          if (country?.length) {
            refFrontier.enable();
          } else {
            refFrontier.disable();
          }
        }), // generate effect secondary
        switchMap((codeAlpha) => this.countryService.getCountriesByAlphaCode(codeAlpha))
        // switchMap(),
      )
      .subscribe((country) => {
        console.log(country);
        this.frontiers = country ? country[0]?.borders || [] : [];
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
