import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/games/interfaces/game.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(game: Game, ...args: unknown[]): unknown {
    return game.images.GAME_BOX_ART;
  }
}
