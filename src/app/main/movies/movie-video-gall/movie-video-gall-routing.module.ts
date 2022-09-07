import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieVideoGallComponent } from './movie-video-gall.component';

const routes: Routes = [{ path: '', component: MovieVideoGallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieVideoGallRoutingModule { }
