import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styles: [],
})
export class CustomsComponent implements OnInit {
  hasCut: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onChangePipe() {
    this.hasCut = !this.hasCut;
  }
}
