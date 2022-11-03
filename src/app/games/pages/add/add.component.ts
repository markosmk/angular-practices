import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
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
  listGenres: string[] = ['ACTION', 'ADVENTURE'];

  constructor(private route: ActivatedRoute, private router: Router, private gameSrv: GameService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((route) => {
          if (route.id) {
            return this.gameSrv.getGamesByShorName(route.id);
          }
          return of(null);
        })
      )
      .subscribe((resp) => {
        if (resp) {
          this.game = resp;
          this.image = resp.images.GAME_BOX_ART;
        }
      });
  }

  save() {
    if (!this.game.title) return;

    // adapt data
    const formData = {
      ...this.game,
      genres: this.game.genres.map((item) => item.toUpperCase()),
      images: { GAME_BOX_ART: this.image },
    };
    // if update
    if (this.game.id) {
      this.gameSrv.updateGame(formData).subscribe((resp) => console.log(resp));
      return;
    }
    this.gameSrv.postNewGame(formData).subscribe((resp) => {
      //go to edit url
      this.router.navigate(['games/edit', resp.id]);
    });
  }

  remove() {
    if (!this.game.id) return;
    this.gameSrv.deleteGame(this.game.id).subscribe(() => {
      this.router.navigate(['games']);
    });
  }
}
