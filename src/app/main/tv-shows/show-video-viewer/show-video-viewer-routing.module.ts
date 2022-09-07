import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowVideoViewerComponent } from './show-video-viewer.component';

const routes: Routes = [{ path: '', component: ShowVideoViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowVideoViewerRoutingModule { }
