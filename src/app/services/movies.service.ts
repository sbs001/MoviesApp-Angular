import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = 'd6ae98e48ba55139582c3f08ad1f06e3';

  constructor( private http: HttpClient) { }

  getNowPlaying(){
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
  } 
}
