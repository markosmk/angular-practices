import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styles: [],
})
export class CustomsComponent implements OnInit {
  hasCut: boolean = false;

  heroes = [
    {
      name: 'Wonder Woman',
      power: 'angel',
    },
    {
      name: 'Batman',
      power: 'force',
    },
    {
      name: 'Superman',
      power: 'inmortal',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onChangePipe() {
    this.hasCut = !this.hasCut;
  }
}
