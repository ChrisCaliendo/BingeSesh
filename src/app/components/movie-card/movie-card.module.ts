import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { MovieBoardComponent } from '../movie-board/movie-board.component';



@NgModule({
  declarations: [],
  imports: [
    HeaderModule,
    CommonModule,
    MovieCardModule
  ],
  exports: [

  ]
})
export class MovieCardModule { }
