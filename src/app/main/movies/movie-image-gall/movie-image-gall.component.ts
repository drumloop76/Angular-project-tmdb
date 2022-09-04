import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/service/movies.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-movie-image-gall',
  templateUrl: './movie-image-gall.component.html',
  styleUrls: ['./movie-image-gall.component.scss']
})
export class MovieImageGallComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  
  id!: number;
  movie: any;
  images: any;
  imagesBack: any;
  imagesId: any;

  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private service: MoviesService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieImages(this.id);
      this.getMovie(this.id);
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

  getMovieImages(id: any) {
    this.service.getMovieImages(id)
      .pipe(share())
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
      // console.log(data.backdrops)
      this.images = data
      this.imagesBack = data.backdrops;
      this.imagesId = data.id
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
