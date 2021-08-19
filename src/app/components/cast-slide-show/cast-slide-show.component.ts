import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/CastingInterface';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit,AfterViewInit {

 @Input() cast:Cast[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween:15,
    })
  }

}
