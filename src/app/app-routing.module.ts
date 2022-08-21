import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'movies', loadChildren: () => import('./main/movies/movies/movies.module').then(m => m.MoviesModule) }, { path: 'movie/:id', loadChildren: () => import('./main/movies/movie-item/movie-item.module').then(m => m.MovieItemModule) }, { path: 'shows', loadChildren: () => import('./main/tv-shows/shows/shows.module').then(m => m.ShowsModule) }, { path: 'show/:id', loadChildren: () => import('./main/tv-shows/show-item/show-item.module').then(m => m.ShowItemModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
