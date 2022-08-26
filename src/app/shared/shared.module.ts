import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowMoreComponent } from './show-more/show-more.component';
import { PipeModule } from './pipe/pipe.module';


@NgModule({
  declarations: [
    PaginationComponent,
    ShowMoreComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    PipeModule,
  ],
  exports: [
    FontAwesomeModule,
    PaginationComponent,
    ShowMoreComponent,
    PipeModule,
  ]
})
export class SharedModule { }
