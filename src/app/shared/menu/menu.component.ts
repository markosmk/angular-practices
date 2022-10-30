import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: any = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes',
        items: [
          {
            label: 'Initial',
            routerLink: './pipes',
          },
          {
            label: 'General',
            routerLink: './pipes/general',
          },
          {
            label: 'Customs',
            routerLink: './pipes/customs',
          },
        ],
      },
      {
        label: 'Template Forms',
        items: [
          {
            label: 'Basics',
            routerLink: './template/basics',
          },
          {
            label: 'Dynamics',
            routerLink: './template/dynamics',
          },
          {
            label: 'Switches',
            routerLink: './template/switches',
          },
        ],
      },
    ];
  }
}
