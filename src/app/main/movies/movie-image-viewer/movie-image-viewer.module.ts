import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieImageViewerRoutingModule } from './movie-image-viewer-routing.module';
import { MovieImageViewerComponent } from './movie-image-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MovieImageViewerComponent
  ],
  imports: [
    CommonModule,
    MovieImageViewerRoutingModule,
    SharedModule,
    NgbCarouselModule,
  ]
})
export class MovieImageViewerModule { }
