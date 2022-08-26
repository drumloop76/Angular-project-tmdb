import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemRoutingModule } from './movie-item-routing.module';
import { MovieItemComponent } from './movie-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    MovieItemRoutingModule,
    SharedModule,
    SwiperModule,
  ]
})
export class MovieItemModule { }
