import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowVideoGallComponent } from './show-video-gall.component';

const routes: Routes = [{ path: '', component: ShowVideoGallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowVideoGallRoutingModule { }
