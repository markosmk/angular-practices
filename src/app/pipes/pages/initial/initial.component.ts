import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styles: [],
})
export class InitialComponent implements OnInit {
  name: string = 'Titulo';
  dateCurrent: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
