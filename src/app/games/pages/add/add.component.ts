import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  game: Game = {} as Game;
  image: string = '';
  listGenres: string[] = ['Action', 'Adventure'];

  constructor(private gameSrv: GameService) {}

  ngOnInit(): void {}

  save() {
    if (!this.game.title) return;

    // adapt data
    const formData = {
      ...this.game,
      genres: this.game.genres.map((item) => item.toUpperCase()),
      images: { GAME_BOX_ART: this.image },
    };
    // console.log(formData);
    this.gameSrv.postNewGame(formData).subscribe((resp) => console.log(resp));
  }
}
