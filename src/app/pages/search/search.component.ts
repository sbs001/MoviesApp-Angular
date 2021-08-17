import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/NowPlayingInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public movies: Movie[] = [];
  public movie = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.movie = params.movie;
      
      this.moviesService
        .searchMovie(this.movie)
        .subscribe((movies) => (this.movies = movies));
    });
  }
}
