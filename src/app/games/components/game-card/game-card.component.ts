import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styles: [],
})
export class GameCardComponent implements OnInit {
  @Input() game: Game = {} as Game;

  constructor() {}

  ngOnInit(): void {}
}
