import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  getGamesByShorName(short: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/games/${short}`);
  }

  getBySearch(query: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games?q=${query}&_limit=6`);
  }
}
