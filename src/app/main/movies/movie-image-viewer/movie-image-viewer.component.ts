import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-image-viewer',
  templateUrl: './movie-image-viewer.component.html',
  styleUrls: ['./movie-image-viewer.component.scss']
})
export class MovieImageViewerComponent implements OnInit {
  id!: number;
  movie: any;
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

  constructor(private service: MoviesService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieImages(this.id);
      this.getMovie(this.id);
    });
    this.activeIndex  = this.route.snapshot.paramMap.get('index');
    // console.log(this.activeIndex, typeof this.activeIndex)
    this.imageIndex = this.activeIndex;
  }

  getMovieImages(id: any) {
    this.service.getMovieImages(id).subscribe((data: any) => {
      console.log(data.backdrops)
      this.images = data.backdrops;
      this.imageId = data.id;
    });
  }

  getMovie(id: any): void {
    this.service.getMovie(id).subscribe((data: any) => {
      // console.log(data)
      this.movie = data;
    });
  }

  onSlide(event: any) {
    // this.imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    // console.log(typeof this.imageIndex)
    console.log(event.current)
    this.imageIndex = event.current;
  }
}
