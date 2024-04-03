import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBoardComponent } from './movie-board.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MovieBoardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MovieBoardComponent,
  ]

})
export class MovieBoardModule { }
