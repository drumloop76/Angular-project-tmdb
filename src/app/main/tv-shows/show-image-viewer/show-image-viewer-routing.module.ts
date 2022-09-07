import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowImageViewerComponent } from './show-image-viewer.component';

const routes: Routes = [{ path: '', component: ShowImageViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowImageViewerRoutingModule { }
