import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent implements OnInit {

  allPlanets: Array<any> = new Array();
  
  category = '/planets';
  pageNumber = 1;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(){
    this.dataService.getData(this.category, this.pageNumber).subscribe(allPlanets => {
      this.allPlanets = allPlanets.results;
      console.log(allPlanets);
      console.log(allPlanets.next);
    }, err => {
      console.log('Erro ao listar os personagens', err);
    })
  }

}
