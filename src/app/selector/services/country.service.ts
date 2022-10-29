import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country, CountrySmall } from '../interfaces/country.interface';

const baseUrl = 'https://restcountries.com/v3.1/';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions() {
    return [...this._regions]; // why desustrured? for broken reference
  }

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string): Observable<CountrySmall[]> {
    if (!region) return of([]);

    const url: string = `${baseUrl}/region/${region}?fields=cca3,name`;
    return this.http.get<CountrySmall[]>(url);
  }

  getCountriesByAlphaCode(code: string): Observable<Country[]> {
    if (!code) return of([]);

    const url: string = `${baseUrl}/alpha/${code.toLowerCase()}`;
    return this.http.get<Country[]>(url);
  }
}
