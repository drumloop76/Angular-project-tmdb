import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TvShowsService } from 'src/app/service/tv-shows.service';

@Component({
  selector: 'app-show-video-gall',
  templateUrl: './show-video-gall.component.html',
  styleUrls: ['./show-video-gall.component.scss']
})
export class ShowVideoGallComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  
  // movie: any;
  show: any;
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

  constructor(private service: TvShowsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getShowVideos(this.id);
      this.getOneShowDetails(this.id);
    });
  }

  getShowVideos(id: any) {
    this.service.getShowVideos(id).subscribe((data: any) => {
      // console.log(data)
      if(data.results.length) {
        this.videos = data.results;
        // console.log(this.videos);
        this.trailer = data.results.find((v:any) => v.type === 'Trailer');
      }
    });
  }

  getOneShowDetails(id: any): void {
    this.service.getOneShowDetails(id)
      .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: any) => {
        // console.log(data)
        this.show = data;
      });
  }

}
