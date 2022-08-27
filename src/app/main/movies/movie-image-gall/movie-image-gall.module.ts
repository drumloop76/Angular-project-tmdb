import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieImageGallRoutingModule } from './movie-image-gall-routing.module';
import { MovieImageGallComponent } from './movie-image-gall.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieImageGallComponent
  ],
  imports: [
    CommonModule,
    MovieImageGallRoutingModule,
    SharedModule
  ]
})
export class MovieImageGallModule { }
