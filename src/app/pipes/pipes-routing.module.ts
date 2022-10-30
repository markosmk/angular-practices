import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomsComponent } from './pages/customs/customs.component';
import { GeneralComponent } from './pages/general/general.component';
import { InitialComponent } from './pages/initial/initial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InitialComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'customs', component: CustomsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
