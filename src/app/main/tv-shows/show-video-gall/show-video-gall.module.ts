import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVideoGallRoutingModule } from './show-video-gall-routing.module';
import { ShowVideoGallComponent } from './show-video-gall.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ShowVideoGallComponent
  ],
  imports: [
    CommonModule,
    ShowVideoGallRoutingModule,
    SharedModule,
  ]
})
export class ShowVideoGallModule { }
