import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { TvShowsService } from 'src/app/service/tv-shows.service';

@Component({
  selector: 'app-show-image-gall',
  templateUrl: './show-image-gall.component.html',
  styleUrls: ['./show-image-gall.component.scss']
})
export class ShowImageGallComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  
  id!: number;
  show: any;
  images: any;
  imagesBack: any;
  imagesId: any;

  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private service: TvShowsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getShowImages(this.id);
      this.getOneShowDetails(this.id);
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

  getShowImages(id: any) {
    this.service.getShowImages(id)
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
