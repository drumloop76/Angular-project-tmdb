import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'movies', loadChildren: () => import('./main/movies/movies/movies.module').then(m => m.MoviesModule) }, 
  { path: 'movie/:id', loadChildren: () => import('./main/movies/movie-item/movie-item.module').then(m => m.MovieItemModule) },
  { path: 'movie-image-gall/:id', loadChildren: () => import('./main/movies/movie-image-gall/movie-image-gall.module').then(m => m.MovieImageGallModule) },
  { path: 'shows', loadChildren: () => import('./main/tv-shows/shows/shows.module').then(m => m.ShowsModule) }, 
  { path: 'show/:id', loadChildren: () => import('./main/tv-shows/show-item/show-item.module').then(m => m.ShowItemModule) },
  { path: 'show-image-gall/:id', loadChildren: () => import('./main/tv-shows/show-image-gall/show-image-gall.module').then(m => m.ShowImageGallModule) },
  { path: 'movie-image-viewer/:id/:index', loadChildren: () => import('./main/movies/movie-image-viewer/movie-image-viewer.module').then(m => m.MovieImageViewerModule) },
  { path: 'show-image-viewer/:id/:index', loadChildren: () => import('./main/tv-shows/show-image-viewer/show-image-viewer.module').then(m => m.ShowImageViewerModule) },
  { path: 'show-video-gall/:id', loadChildren: () => import('./main/tv-shows/show-video-gall/show-video-gall.module').then(m => m.ShowVideoGallModule) },
  { path: 'movie-video-gall/:id', loadChildren: () => import('./main/movies/movie-video-gall/movie-video-gall.module').then(m => m.MovieVideoGallModule) },
  { path: 'movie-video-viewer/:id/:index', loadChildren: () => import('./main/movies/movie-video-viewer/movie-video-viewer.module').then(m => m.MovieVideoViewerModule) },
  { path: 'show-video-viewer/:id/:index', loadChildren: () => import('./main/tv-shows/show-video-viewer/show-video-viewer.module').then(m => m.ShowVideoViewerModule) },
  { path: 'person/:id', loadChildren: () => import('./main/person/person.module').then(m => m.PersonModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
