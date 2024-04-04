import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInfoComponent } from './movie-info.component';



@NgModule({
  declarations: [
    MovieInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieInfoComponent
  ]
})
export class MovieInfoModule { }
