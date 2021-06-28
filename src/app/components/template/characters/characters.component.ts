import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Array<any> = new Array() 
  category = 'all.json';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.dataService.getData(this.category).subscribe(allCharacters => {
      this.allCharacters = allCharacters;
      console.log(allCharacters)
    }, err => {
      console.log('Erro ao listar os personagens', err);
    })
  }

}
