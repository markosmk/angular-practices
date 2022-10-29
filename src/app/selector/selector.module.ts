import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectorRoutingModule } from './selector-routing.module';
import { CountriesComponent } from './pages/countries/countries.component';

@NgModule({
  declarations: [CountriesComponent],
  imports: [CommonModule, SelectorRoutingModule, ReactiveFormsModule],
})
export class SelectorModule {}
