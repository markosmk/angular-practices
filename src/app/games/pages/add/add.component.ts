import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';

import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  game: Game = {} as Game;
  image: string = '';
  listGenres: string[] = ['ACTION', 'ADVENTURE'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameSrv: GameService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

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
      this.gameSrv.updateGame(formData).subscribe((_resp) => this.openSnackBar('Item Updated!'));
      return;
    }
    this.gameSrv.postNewGame(formData).subscribe((resp) => {
      this.openSnackBar('Item Added Successfully!');
      //go to edit url
      this.router.navigate(['games/edit', resp.id]);
    });
  }

  remove() {
    if (!this.game.id) return;
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: this.game,
    });

    dialog
      .afterClosed()
      .pipe(
        switchMap((resp) => {
          if (resp) {
            return this.gameSrv.deleteGame(this.game.id);
          }
          return of(null);
        })
      )
      .subscribe((resp) => {
        if (resp) {
          this.openSnackBar('Item Deleted!');
          this.router.navigate(['games']);
        }
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'ok!', { duration: 2500, panelClass: ['bg-gray-600', 'text-white'] });
  }
}
