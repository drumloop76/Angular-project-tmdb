import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieVideoViewerRoutingModule } from './movie-video-viewer-routing.module';
import { MovieVideoViewerComponent } from './movie-video-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieVideoViewerComponent
  ],
  imports: [
    CommonModule,
    MovieVideoViewerRoutingModule,
    SharedModule,
  ]
})
export class MovieVideoViewerModule { }
