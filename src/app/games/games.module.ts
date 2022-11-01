import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GamesRoutingModule } from './games-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListingComponent } from './pages/listing/listing.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [ListingComponent, AddComponent, SearchComponent, GameComponent, HomeComponent],
  imports: [CommonModule, GamesRoutingModule, MaterialModule, HttpClientModule],
})
export class GamesModule {}
