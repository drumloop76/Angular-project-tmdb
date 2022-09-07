import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from 'src/app/service/tv-shows.service';

@Component({
  selector: 'app-show-image-viewer',
  templateUrl: './show-image-viewer.component.html',
  styleUrls: ['./show-image-viewer.component.scss']
})
export class ShowImageViewerComponent implements OnInit {
  id!: number;
  show: any;
  images: any;
  imageId: any;
  imgsLength: any;
  imageUrl = 'https://image.tmdb.org/t/p/w1280';

  noWrapSlides = false;
  showIndicator = true;
  activeIndex: any;
  imageIndex: any;
  // imageIndex: any;
  // active: any;

  constructor(private service: TvShowsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getShowImages(this.id);
      this.getTvShow(this.id);
    });
    this.activeIndex  = this.route.snapshot.paramMap.get('index');
    // console.log(this.activeIndex, typeof this.activeIndex)
    this.imageIndex = this.activeIndex;
  }

  getShowImages(id: any) {
    this.service.getShowImages(id).subscribe((data: any) => {
      // console.log(data.backdrops)
      this.images = data.backdrops;
      this.imageId = data.id;
    });
  }

  getTvShow(id: any): void {
    this.service.getOneShowDetails(id).subscribe((data: any) => {
      // console.log(data)
      this.show = data;
    });
  }

  onSlide(event: any) {
    // this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    // console.log(typeof this.imageIndex)
    console.log(event.current)
    this.imageIndex = event.current;
  }

}
