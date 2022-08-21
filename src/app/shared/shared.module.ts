import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';


@NgModule({
  declarations: [
    ClickedOutsideDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
