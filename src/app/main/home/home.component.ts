import { Component, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { TvShowsService } from 'src/app/service/tv-shows.service';
import SwiperCore, { Navigation, Virtual } from 'swiper';

SwiperCore.use([Navigation, Virtual]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() nowPlayingMovies: any[] = [];
  movies: any[] = [];
  shows: any[] = [];
  upcomingMovies: any[] = [];
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  topRated: any[] = [];

  noImage = './assets/images/no_img2.png'

  slides = Array.from({ length: 20 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  constructor(private service: MoviesService, private serviceTv: TvShowsService) { }

  ngOnInit(): void {
    this.getNowPlaying();
    this.getPopularMovies();
    this.getUpcomingMovies();
    this.getPopularSeries();
    this.getTopRated();
  }

  getNowPlaying(): void {
    this.service.getNowPlaying().subscribe((data: any) => {
      // console.log(data.results.slice(0, 6))
      this.nowPlayingMovies = data.results.slice(0, 6);
    });
  }

  getPopularMovies(): void {
    this.service.getPopularMovies().subscribe((data: any) => {
      // console.log(data.results)
      this.movies = data.results.slice(0, 16);
    });
  }

  getUpcomingMovies(): void {
    this.service.getUpcomingMovies().subscribe((data: any) => {
      // console.log(data.results)
      this.upcomingMovies = data.results.slice(0, 16);
    });
  }

  getPopularSeries(): void {
    this.serviceTv.getPopularSeries().subscribe((data: any) => {
      // console.log(data.results)
      this.shows = data.results.slice(0, 16);
    });
  }


  getTopRated(): void {
    this.service.getTopRated().subscribe((data: any) => {
      console.log(data.results)
      this.topRated = data.results.slice(0, 10);
    });
  }
}

