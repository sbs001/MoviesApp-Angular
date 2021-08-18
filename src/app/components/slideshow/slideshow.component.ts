import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/NowPlayingInterface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[] = [];

  public mySwiper!: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
    this.mySwiper.slideNext()
  }
  ngOnInit(): void {

  }

  onSlideNext() {
    this.mySwiper.slideNext()
  }
  onSlidePrev() {
    this.mySwiper.slidePrev()
  }
}
