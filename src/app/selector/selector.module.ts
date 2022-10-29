import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorRoutingModule } from './selector-routing.module';
import { CountriesComponent } from './pages/countries/countries.component';


@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    SelectorRoutingModule
  ]
})
export class SelectorModule { }
