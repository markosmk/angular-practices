import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListingComponent } from './pages/listing/listing.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './components/game-card/game-card.component';

import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    ListingComponent,
    AddComponent,
    SearchComponent,
    GameComponent,
    HomeComponent,
    GameCardComponent,
    ImagePipe,
  ],
  imports: [CommonModule, GamesRoutingModule, MaterialModule, HttpClientModule, FormsModule],
})
export class GamesModule {}
