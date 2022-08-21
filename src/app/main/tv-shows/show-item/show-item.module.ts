import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowItemRoutingModule } from './show-item-routing.module';
import { ShowItemComponent } from './show-item.component';


@NgModule({
  declarations: [
    ShowItemComponent
  ],
  imports: [
    CommonModule,
    ShowItemRoutingModule
  ]
})
export class ShowItemModule { }
