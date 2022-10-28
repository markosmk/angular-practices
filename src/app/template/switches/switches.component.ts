import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  person = {
    gender: '',
    notifications: true,
  };

  terms: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSave(form: NgForm) {
    console.log(form.value);
  }
}
