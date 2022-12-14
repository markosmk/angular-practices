import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: [],
})
export class SidemenuComponent implements OnInit {
  pipesMenu: MenuItem[] = [
    {
      text: 'Pipes Initial',
      route: './pipes',
    },
    {
      text: 'Pipes General',
      route: './pipes/general',
    },
    {
      text: 'Pipes Custom',
      route: './pipes/customs',
    },
  ];
  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './template/basics',
    },
    {
      text: 'Dynamics',
      route: './template/dynamics',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];
  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './reactive/basics',
    },
    {
      text: 'Dinamics',
      route: './reactive/dynamics',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];
  validationMenu: MenuItem[] = [
    {
      text: 'Login',
      route: './auth/login',
    },
    {
      text: 'Register',
      route: './auth/register',
    },
  ];
  selectorMenu: MenuItem[] = [
    {
      text: 'Countries',
      route: './selector',
    },
  ];
  directivesMenu: MenuItem[] = [
    {
      text: 'Add Product',
      route: './directives',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
