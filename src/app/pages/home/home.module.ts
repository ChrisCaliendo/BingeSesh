import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { MovieBoardComponent } from 'src/app/components/movie-board/movie-board.component';
import { MovieBoardModule } from 'src/app/components/movie-board/movie-board.module';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MovieBoardModule,
    MatIconModule,
    
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
