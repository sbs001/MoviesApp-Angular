import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/interfaces/CastingInterface';
import { MovieDetail } from 'src/app/interfaces/MovieDetailInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public movie!: MovieDetail;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.moviesService
      .getMovieDetail(id)
      .subscribe((res) => (this.movie = res));

    this.moviesService
      .getMovieCasting(id)
      .subscribe((res) => (this.cast = res));
  }

  goBack() {
    this.location.back();
  }
}
