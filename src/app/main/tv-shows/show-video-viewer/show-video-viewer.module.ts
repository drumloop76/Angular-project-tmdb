import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVideoViewerRoutingModule } from './show-video-viewer-routing.module';
import { ShowVideoViewerComponent } from './show-video-viewer.component';


@NgModule({
  declarations: [
    ShowVideoViewerComponent
  ],
  imports: [
    CommonModule,
    ShowVideoViewerRoutingModule
  ]
})
export class ShowVideoViewerModule { }
