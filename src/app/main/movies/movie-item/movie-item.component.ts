import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LanguagesService } from 'src/app/service/languages.service';
import { MoviesService } from 'src/app/service/movies.service';
import SwiperCore, { Navigation, Virtual } from 'swiper';

SwiperCore.use([Navigation, Virtual]);

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  id!: number;
  movie: any;
  crew: any;
  directors: any[] = [];
  cast: any[] = [];
  images: any;
  imagesLength: number = 0;
  videos: any[] = [];
  videosLength: number = 0;
  recommendedMovies: any[] = [];
  genres: any[] = [];
  reviews: any[] = [];

  noImage = './assets/images/no_img2.png'

  imageUrl = 'https://image.tmdb.org/t/p/w500';
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  trailer: any;
  officialTrailer: any;
  trailerUrl: any;
  isOpen: boolean = false;
  vimeoUrl = 'https://player.vimeo.com/video/';
  videosUrl: any;

  slides = Array.from({ length: 20 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  constructor(private service: MoviesService, 
              private router: ActivatedRoute, 
              private serviceLang: LanguagesService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getOneMovieDetails(this.id);
      this.getMovieCredits(this.id);
      this.getMovieImages(this.id);
      this.getMovieVideos(this.id);
      this.getRecommendedMovies(this.id);
      this.getLanguages();
      this.getMovieReviews(this.id);
    });
  }

  getOneMovieDetails(id: any){
    this.service.getMovie(id).subscribe((data: any) => {
      // console.log(data)
      this.movie = data;
    });
  }

  getMovieCredits(id: any) {
    this.service.getMovieCredits(id).subscribe((data: any) => {
      // console.log(data.cast)
      data.crew.map((d: any) => {
        if(d.job === 'Director') {
          this.directors.push(d)
        }
      })
      this.crew = data.crew;
      this.cast = data.cast;
    });
  }

  getMovieImages(id: any) {
    this.service.getMovieImages(id).subscribe((data: any) => {
      // console.log(data)
      this.images = data;
      this.imagesLength = data.backdrops.length;
    });
  }

  getMovieVideos(id: any) {
    this.service.getMovieVideos(id).subscribe((data: any) => {
      this.videosLength = data.results.length;
      if(data.results.length) {
        this.videos = data.results;
        this.trailer = data.results.find((v:any) => v.type === 'Trailer');
      }
      if(data.results) {
        if(this.trailer.site === 'Vimeo') {
          this.trailerUrl = `${this.vimeoUrl}${this.trailer.key}`
        } else if(this.trailer.site === 'YouTube') {
          this.trailerUrl = `${this.baseUrl}${this.trailer.key}`
        }

        this.isOpen = true;
      }
    });
  }

  getRecommendedMovies(id: any) {
    this.service.getRecommendedMovies(id).subscribe((data: any) => {
      // console.log(data.results)
      this.recommendedMovies = data.results;
    });
  }

  getLanguages() {
    this.serviceLang.getLanguages().subscribe((data: any) => {
      // console.log(data)
      this.genres = data;
    })
  }

  getMovieReviews(id: any) {
    this.service.getMovieReviews(id).subscribe((data: any) => {
      // console.log(data.results)
      this.reviews = data.results;
    })
  }
}
