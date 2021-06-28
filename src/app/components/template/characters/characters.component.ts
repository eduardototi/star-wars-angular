import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Array<any> = new Array() 
  category = '/people';
  pageNumber = 1;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  nextPage(): void {
    this.pageNumber = this.pageNumber + 1;
    this.getCharacters();
  }

  previewsPage(): void {
    this.pageNumber = this.pageNumber - 1;
    this.getCharacters();
  }

  getCharacters(){
    this.dataService.getData(this.category, this.pageNumber).subscribe(allCharacters => {
      this.allCharacters = allCharacters.results;
      console.log(allCharacters);
    }, err => {
      console.log('Erro ao listar os personagens', err);
    })
  }

}
