import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-video-gall',
  templateUrl: './movie-video-gall.component.html',
  styleUrls: ['./movie-video-gall.component.scss']
})
export class MovieVideoGallComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  
  movie: any;
  // series: any;
  images: any
  imagesBack: any;
  show_images: any;
  imagesId: any;
  id!: number;
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  video!: any;
  videos: any;

  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  trailer: any;
  officialTrailer: any;
  trailerUrl: any;
  isOpen: boolean = false;
  vimeoUrl = 'https://player.vimeo.com/video/';
  videosUrl: any;

  constructor(private service: MoviesService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieVideos(this.id);
      this.getMovie(this.id);
    });
  }

  getMovieVideos(id: any) {
    this.service.getMovieVideos(id).subscribe((data: any) => {
      // console.log(data)
      if(data.results.length) {
        this.videos = data.results;
        // console.log(this.videos);
        this.trailer = data.results.find((v:any) => v.type === 'Trailer');
      }
    });
  }

  getMovie(id: any): void {
    this.service.getMovie(id)
      .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: any) => {
        // console.log(data)
        this.movie = data;
      });
  }

}
