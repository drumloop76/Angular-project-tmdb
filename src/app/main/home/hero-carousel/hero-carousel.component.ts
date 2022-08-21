import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {
  @Input() movies: any[] = [];
  imageUrl = 'https://image.tmdb.org/t/p/w1280';
  
  constructor() { }

  ngOnInit(): void {
  }

}
