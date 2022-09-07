import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowImageViewerRoutingModule } from './show-image-viewer-routing.module';
import { ShowImageViewerComponent } from './show-image-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ShowImageViewerComponent
  ],
  imports: [
    CommonModule,
    ShowImageViewerRoutingModule,
    SharedModule,
    NgbCarouselModule,
  ]
})
export class ShowImageViewerModule { }
