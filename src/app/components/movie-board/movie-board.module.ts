import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBoardComponent } from './movie-board.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MovieBoardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MovieBoardComponent,
  ]

})
export class MovieBoardModule { }
