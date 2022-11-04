import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { switchMap } from 'rxjs';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: [],
})
export class GameComponent implements OnInit {
  game!: Game;
  constructor(private route: ActivatedRoute, private gameSrv: GameService, public location: Location) {
    console.log(this.game);
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(({ id }) => this.gameSrv.getGamesByShorName(id))).subscribe((resp) => {
      console.log(resp);
      this.game = resp;
    });
  }
}
