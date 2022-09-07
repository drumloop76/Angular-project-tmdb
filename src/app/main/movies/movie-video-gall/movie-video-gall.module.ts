import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieVideoGallRoutingModule } from './movie-video-gall-routing.module';
import { MovieVideoGallComponent } from './movie-video-gall.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieVideoGallComponent
  ],
  imports: [
    CommonModule,
    MovieVideoGallRoutingModule,
    SharedModule,
  ]
})
export class MovieVideoGallModule { }
