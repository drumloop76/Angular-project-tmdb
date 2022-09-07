import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-video-viewer',
  templateUrl: './movie-video-viewer.component.html',
  styleUrls: ['./movie-video-viewer.component.scss']
})
export class MovieVideoViewerComponent implements OnInit {
  movie: any;
  imageUrl = 'https://image.tmdb.org/t/p/w500';
  // images: any;
  // imgsLength: any;
  id!: number;
  // imageId: any;
  // imageUrl = 'https://image.tmdb.org/t/p/w1280';
  video!: any;
  videos: any;
  videoKey: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  vimeoUrl = 'https://player.vimeo.com/video/';
  videoUrl: any;

  isOpen: boolean = false;

  // noWrapSlides = false;
  // showIndicator = true;
  // activeIndex: any;
  // imageIndex: any;

  constructor(private service: MoviesService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieVideos(this.id);
      this.getMovie(this.id);
      this.videoKey = this.route.snapshot.paramMap.get('index');
      console.log(this.videoKey)
    });
  }

  getMovieVideos(id: any) {
    this.service.getMovieVideos(id).subscribe((data: any) => {
      // console.log(data)
      if(data.results.length ) {
        this.videos = data.results;
        // console.log(this.videos);
        this.video = data.results.find((v:any) => v.id === this.videoKey);
        // console.log(this.video)
      }

      if(this.video) {
        if(this.video.site === 'Vimeo') {
          this.videoUrl = `${this.vimeoUrl}${this.video.key}`
        } else if(this.video.site === 'YouTube') {
          this.videoUrl = `${this.baseUrl}${this.video.key}${this.autoplay}`
        }

        this.isOpen = true;
      }
    });
  }

  getMovie(id: any): void {
    this.service.getMovie(id).subscribe((data: any) => {
      // console.log(data)
      this.movie = data;
    });
  }

}
