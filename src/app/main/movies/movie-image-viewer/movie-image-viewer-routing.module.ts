import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieImageViewerComponent } from './movie-image-viewer.component';

const routes: Routes = [{ path: '', component: MovieImageViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieImageViewerRoutingModule { }
