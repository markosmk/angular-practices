import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: Game) {}

  ngOnInit(): void {}

  remove() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
