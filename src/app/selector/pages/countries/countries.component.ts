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
    country: [{ value: '', disabled: true }, Validators.required],
    frontier: [{ value: '', disabled: true }, Validators.required],
  });

  regions: string[] = [];
  countries: CountrySmall[] = [];
  frontiers: CountrySmall[] = [];

  //ui
  loading: boolean = false;

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
    // this.form.get('frontier').disable();
    // this.form.get('country').disable();

    // with rxjs
    // when change region
    this.form
      .get('region')
      ?.valueChanges.pipe(
        tap((region: string) => {
          const refCountry = this.form.get('country');
          refCountry.reset('');
          this.loading = true;
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
        this.loading = false;
      });

    // when change country
    this.form
      .get('country')
      ?.valueChanges.pipe(
        tap((country: string) => {
          this.frontiers = [];
          this.loading = true;
          const refFrontier = this.form.get('frontier');
          refFrontier.reset('');
          if (country?.length) {
            refFrontier.enable();
          } else {
            refFrontier.disable();
          }
        }), // generate effect secondary
        switchMap((codeAlpha) => this.countryService.getCountriesByAlphaCode(codeAlpha)),
        switchMap((country) => {
          const listFrontiers: string[] = country?.length ? country[0]?.borders || [] : [];
          return this.countryService.getCountriesByCodes(listFrontiers);
        })
      )
      .subscribe((countries) => {
        this.frontiers = countries;
        this.loading = false;
        // for allowed valid form when not found frontier
        if (!this.frontiers.length) {
          this.form.get('frontier').disable();
          this.form.get('frontier').clearValidators();
        } else {
          this.form.get('frontier').setValidators(Validators.required);
        }
        this.form.get('frontier').updateValueAndValidity();
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
