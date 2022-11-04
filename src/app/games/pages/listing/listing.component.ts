import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styles: [],
})
export class ListingComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameSrv: GameService) {}

  ngOnInit(): void {
    this.gameSrv.getGames().subscribe((resp) => (this.games = resp.slice(0, 12)));
  }
}
