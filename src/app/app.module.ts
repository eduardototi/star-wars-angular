import { ShowComponent } from './views/show/show.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { CharactersComponent } from './components/template/characters/characters.component';
import { DataService } from './services/data.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterComponent } from './components/template/character/character.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,
    CharactersComponent,
    CharacterComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  providers: [ DataService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
