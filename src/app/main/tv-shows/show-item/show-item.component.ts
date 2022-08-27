import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LanguagesService } from 'src/app/service/languages.service';
import { TvShowsService } from 'src/app/service/tv-shows.service';
import SwiperCore, { Navigation, Virtual } from 'swiper';

SwiperCore.use([Navigation, Virtual]);

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  id!: number;
  show: any;
  crew: any[] = [];
  cast: any[] = [];
  images: any;
  imagesLength: number = 0;
  videos: any;
  videosLength: number = 0;
  creators: any[] = [];
  directors: any[] = [];
  recommendedSeries: any;
  genres: any[] = [];
  reviews: any[] = [];
  similarShows: any;

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

  constructor(private service: TvShowsService, 
              private router: ActivatedRoute, 
              private serviceLang: LanguagesService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getOneShowDetails(this.id);
      this.getShowCredits(this.id);
      this.getShowImages(this.id);
      this.getShowVideos(this.id);
      this.getSimilarSeries(this.id);
      this.getShowReviews(this.id);
    });
  }

  getOneShowDetails(id: any){
    this.service.getOneShowDetails(id).subscribe((data: any) => {
      // console.log(data)
      this.show = data;
      this.creators = data.created_by;
    });
  }

  getShowCredits(id: any) {
    this.service.getShowCredits(id).subscribe((data: any) => {
      // console.log(data.cast)
      data.crew.map((d: any) => {
        if(d.job === 'Series Director') {
          this.directors.push(d)
        }
      })
      this.crew = data.crew;
      this.cast = data.cast;
    });
  }

  getShowImages(id: any) {
    this.service.getShowImages(id).subscribe((data: any) => {
      console.log(data.backdrops.length)
      this.images = data;
      this.imagesLength = data.backdrops.length;
      // console.log(typeof this.imagesLength)
    });
  }

  getShowVideos(id: any) {
    this.service.getShowVideos(id).subscribe((data: any) => {
      // console.log(data.results)
      this.videosLength = data.results.length;
      if (data.results.length) {
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

  getSimilarSeries(id: any){
    this.service.getSimilarSeries(id).subscribe((data: any) => {
      // console.log(data.results)
      this.similarShows = data.results;
    });
  }

  getShowReviews(id: any) {
    this.service.getShowReviews(id).subscribe((data: any) => {
      // console.log(data.results)
      this.reviews = data.results;
    })
  }

  getLanguages() {
    this.serviceLang.getLanguages().subscribe((data: any) => {
      // console.log(data.results)
      this.genres = data.results;
    })
  }

}
