import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listing', component: ListingComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: GameComponent },
      { path: '**', redirectTo: 'listing' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
