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
  { path: 'shows', loadChildren: () => import('./main/tv-shows/shows/shows.module').then(m => m.ShowsModule) }, 
  { path: 'show/:id', loadChildren: () => import('./main/tv-shows/show-item/show-item.module').then(m => m.ShowItemModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
