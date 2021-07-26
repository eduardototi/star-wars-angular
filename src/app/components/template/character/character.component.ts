import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Array<any> = new Array()
  characterData: Array<any> = new Array()
  characterAffiliations: Array<any> = new Array()
  characterImage: any;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getOneCharacter()
  }

  getOneCharacter(): void {
    const id = this.route.snapshot.paramMap.get("id") || ''
    this.dataService.getCharacterById(id).subscribe(character => {
      this.character = character
      this.characterData.push(character.name, character.height, character.mass, character.gender)
      this.characterAffiliations = character.affiliations
      this.characterImage = character.image
      console.log(this.character)
      console.log(this.characterAffiliations)
    });
  }

}
