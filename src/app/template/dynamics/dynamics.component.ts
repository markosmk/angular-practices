import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css'],
})
export class DynamicsComponent implements OnInit {
  person: Person = {
    name: 'Marcos',
    favorites: [
      { id: 1, name: 'Gisela' },
      { id: 2, name: 'Yanira' },
    ],
  };
  newGame: string = '';
  constructor() {}

  ngOnInit(): void {}
  save() {
    console.log('posteado');
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  deleteItem(idx: number) {
    this.person.favorites.splice(idx, 1);
  }
}
