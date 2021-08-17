import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/NowPlayingInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css'],
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = document.documentElement.scrollTop + 1300;
    const max = document.documentElement.scrollHeight;

    if (pos > max) {
      this.moviesService.getNowPlaying().subscribe( res => this.movies.push(...res.results))
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
}
