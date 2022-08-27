import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowImageGallComponent } from './show-image-gall.component';

const routes: Routes = [{ path: '', component: ShowImageGallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowImageGallRoutingModule { }
