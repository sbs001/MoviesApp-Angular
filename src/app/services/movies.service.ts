import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, NowPlaying } from '../interfaces/NowPlayingInterface';
import { map, tap } from 'rxjs/operators';
import { SearchMovie } from '../interfaces/SearchMovieInterface';
import { MovieDetail } from '../interfaces/MovieDetailInterface';
import { Casting } from '../interfaces/CastingInterface';

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

    return this.http
      .get<NowPlaying>(
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

  searchMovie(movie: string): Observable<Movie[]> {
    return this.http
      .get<SearchMovie>(
        `${this.baseURL}/search/movie?api_key=${this.apiKey}&language=en-US&query=${movie}&page=1&include_adult=false`
      )
      .pipe(map((res) => res.results));
  }

  resetNowPlayingPage() {
    this.nowPlayingPage = 1;
  }

  getMovieDetail(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.baseURL}/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }

  getMovieCasting(id: string) {
    return this.http
      .get<Casting>(
        `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(map((res) => res.cast));
  }
}
