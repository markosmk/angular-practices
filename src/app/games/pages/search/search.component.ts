import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  querySearch: string = '';
  filteredOptions: Game[] = [];
  gameSelected: Game | undefined;

  constructor(private gameSrv: GameService) {}

  ngOnInit(): void {}
  search() {
    this.gameSrv.getBySearch(this.querySearch).subscribe((games) => (this.filteredOptions = games));
  }
  optionSelected(event: MatAutocompleteSelectedEvent) {
    const game: Game = event.option.value;
    if (!game) {
      this.gameSelected = undefined;
      return;
    }

    this.querySearch = game.title;

    this.gameSrv.getGamesByShorName(game.id).subscribe((game) => (this.gameSelected = game));
  }
}
