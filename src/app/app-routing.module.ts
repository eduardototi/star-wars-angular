import { CharacterComponent } from './components/template/character/character.component';
import { ShowComponent } from './views/show/show.component';
// import { PlanetsComponent } from './components/template/planets/planets.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'show/:id',
    component: ShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
