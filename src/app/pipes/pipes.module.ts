import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';

// PrimeNg Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// change language locale
import localeEs from '@angular/common/locales/es-AR';
import localeRu from '@angular/common/locales/ru-BY';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeRu);

// Components
import { InitialComponent } from './pages/initial/initial.component';
import { CustomsComponent } from './pages/customs/customs.component';
import { GeneralComponent } from './pages/general/general.component';
import { UppercustomPipe } from './pipes/uppercustom.pipe';

@NgModule({
  declarations: [InitialComponent, CustomsComponent, GeneralComponent, UppercustomPipe],
  imports: [CommonModule, PipesRoutingModule, PrimeNgModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
})
export class PipesModule {}
