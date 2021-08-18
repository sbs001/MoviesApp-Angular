import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/NowPlayingInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() scroll? = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = document.documentElement.scrollTop + 1300;
    const max = document.documentElement.scrollHeight;

    if (pos > max && !this.moviesService.loading && this.scroll) {
      this.moviesService
        .getNowPlaying()
        .subscribe((movies) => this.movies.push(...movies));
    }
  }

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {}

  onClick(id: number) {
    this.router.navigate(['/movie',id])
  }
}
