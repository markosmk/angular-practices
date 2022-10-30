import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styles: [],
})
export class GeneralComponent implements OnInit {
  name: string = 'Marcos';
  gender: 'male' | 'female' = 'male';
  letterMap = {
    male: 'bienvenido',
    female: 'bienvenida',
  };

  //plural
  clients: string[] = ['Maria', 'Pedro', 'Juan'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  // keyvalue
  persons = {
    name: 'Marcos',
    age: 28,
    address: 'Otawa Canada',
  };

  constructor() {}

  ngOnInit(): void {}

  changeClients() {
    this.clients.pop();
  }

  changeName() {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  myObservable = interval(500);
  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Termino la promesa');
    }, 3000);
  });
}
