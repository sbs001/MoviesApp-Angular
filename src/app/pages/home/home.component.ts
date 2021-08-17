import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/NowPlayingInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }
}
