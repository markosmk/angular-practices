import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, DirectivesRoutingModule, ReactiveFormsModule],
})
export class DirectivesModule {}
