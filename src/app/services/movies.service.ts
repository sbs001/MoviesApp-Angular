import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, NowPlaying } from '../interfaces/NowPlayingInterface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = 'd6ae98e48ba55139582c3f08ad1f06e3';
  private baseURL = 'https://api.themoviedb.org/3';
  private nowPlayingPage = 1;
  public loading = false;

  constructor(private http: HttpClient) {}

  getNowPlaying(): Observable<Movie[]> {
    this.loading = true;

    return this.http.get<NowPlaying>(
        `${this.baseURL}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${this.nowPlayingPage}`
      )
      .pipe(
        map((res) => res.results),
        tap(() => {
          this.nowPlayingPage += 1;
          this.loading = false;
        })
      );
  }
}
