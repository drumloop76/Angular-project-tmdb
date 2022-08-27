import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowImageGallRoutingModule } from './show-image-gall-routing.module';
import { ShowImageGallComponent } from './show-image-gall.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ShowImageGallComponent
  ],
  imports: [
    CommonModule,
    ShowImageGallRoutingModule,
    SharedModule
  ]
})
export class ShowImageGallModule { }
