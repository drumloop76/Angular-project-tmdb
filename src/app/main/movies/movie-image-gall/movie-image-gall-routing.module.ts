import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieImageGallComponent } from './movie-image-gall.component';

const routes: Routes = [{ path: '', component: MovieImageGallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieImageGallRoutingModule { }
