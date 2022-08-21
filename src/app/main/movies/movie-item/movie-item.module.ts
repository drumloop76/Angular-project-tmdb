import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemRoutingModule } from './movie-item-routing.module';
import { MovieItemComponent } from './movie-item.component';


@NgModule({
  declarations: [
    MovieItemComponent
  ],
  imports: [
    CommonModule,
    MovieItemRoutingModule
  ]
})
export class MovieItemModule { }
