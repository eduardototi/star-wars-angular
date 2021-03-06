import { DataService } from './../../../services/data.service';
import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  allCharacters: Array<any> = new Array()
  category = 'all.json';
  public paginaAtual = 1;

  constructor(private dataService: DataService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.dataService.getData(this.category).subscribe(allCharacters => {
      this.allCharacters = allCharacters;
    }, err => {
      console.log('Erro ao listar os personagens', err);
    })
  }

  openDialog(_character: any): void {
    const dialogRef = this.dialog.open(CharacterComponent, {
      width: '100%',
      data: _character
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
