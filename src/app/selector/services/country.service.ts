import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

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

  getCountriesByAlphaCodeSmall(code: string): Observable<CountrySmall[]> {
    if (!code) return of([]);

    const url: string = `${baseUrl}/alpha/${code.toLowerCase()}?fields=cca3,name`;
    return this.http.get<CountrySmall[]>(url);
  }

  getCountriesByCodes(codes: string[]): Observable<CountrySmall[]> {
    if (!codes.length) return of([]);

    const response: Observable<any>[] = []; // TODO remove any

    codes.forEach((code) => {
      const resp = this.getCountriesByAlphaCodeSmall(code);
      response.push(resp);
    });

    return forkJoin(response);
  }
}
