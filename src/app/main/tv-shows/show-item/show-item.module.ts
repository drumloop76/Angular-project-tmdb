import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowItemRoutingModule } from './show-item-routing.module';
import { ShowItemComponent } from './show-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ShowItemComponent
  ],
  imports: [
    CommonModule,
    ShowItemRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class ShowItemModule { }
