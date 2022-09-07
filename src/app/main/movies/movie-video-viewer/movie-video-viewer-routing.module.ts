import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieVideoViewerComponent } from './movie-video-viewer.component';

const routes: Routes = [{ path: '', component: MovieVideoViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieVideoViewerRoutingModule { }
