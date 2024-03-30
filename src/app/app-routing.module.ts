import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BingeMakerComponent } from './binge-maker/binge-maker.component';
import { BingeWatcherComponent } from './binge-watcher/binge-watcher.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: BingeMakerComponent, path: 'bingeMaker'},
  {component: BingeWatcherComponent, path: 'bingeWatcher'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
