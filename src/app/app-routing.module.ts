import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BingeMakerComponent } from './pages/binge-maker/binge-maker.component';
import { BingeWatcherComponent } from './pages/binge-watcher/binge-watcher.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: BingeMakerComponent, path: 'bingeMaker'},
  {component: BingeWatcherComponent, path: 'bingeWatcher'},
  {component: MovieInfoComponent, path: 'movieInfo/:id'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
