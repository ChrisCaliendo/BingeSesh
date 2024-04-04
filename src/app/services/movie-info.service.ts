import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowExtDetail } from '../models/showExtDetail';

@Injectable({
  providedIn: 'root'
})

export class MovieInfoService {

  constructor(private http: HttpClient) { }

  getMovieInfo(id: number): Observable<ShowExtDetail> {
    const url = 'https://localhost:7185/api/TMDB/getById/' + id + '/rawData'; 
    return this.http.get<any>(url).pipe(
      map((show: any) => {
        return{
          id: show.id,
          title: show.title,
          description: show.overview,
          timespan: show.runtime,
          imageUrl: show.posterPath,
          releaseDate: show.releaseDate,
          adult: show.adult,
          status: show.status,
          rating: show.voteAverage
        };
      })
    );
  }
}