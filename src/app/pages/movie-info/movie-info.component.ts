import { ShowExtDetail } from 'src/app/models/showExtDetail';
import { MovieInfoService } from './../../services/movie-info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  show: ShowExtDetail | null = null;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private MovieInfoService: MovieInfoService) { }

  ngOnInit(): void {
    var movieId: number | null = null;
    this.route.params.subscribe(params => {
      this.MovieInfoService.getMovieInfo(params['id']).subscribe(
        showDetails => {
          this.show = showDetails
          this.loading = false
      }, error => {
        console.log(error)
        this.loading = false
      });
    });

  }

}
