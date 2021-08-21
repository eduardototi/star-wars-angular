import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getCharacterData()
  }

  getCharacterData(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
