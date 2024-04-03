import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomeComponent } from './pages/home/home.component';
import { BingeWatcherComponent } from './pages/binge-watcher/binge-watcher.component';
import { BingeMakerComponent } from './pages/binge-maker/binge-maker.component';
import { MovieBoardComponent } from './components/movie-board/movie-board.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    BingeWatcherComponent,
    BingeMakerComponent,
    MovieInfoComponent,
    
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
