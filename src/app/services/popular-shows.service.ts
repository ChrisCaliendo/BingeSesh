import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})

export class PopularShowsService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Show[]> {
    const url = 'https://localhost:7185/api/TMDB/getPopularMovies/filteredData'; 
    return this.http.get<any>(url).pipe(
      map((response: any[]) => {
        return response.map(show => ({
          id: show.id,
          title: show.title,
          description: show.description,
          timespan: show.timespan,
          imageUrl: show.imageUrl
        }));
      })
    );

  }
}
