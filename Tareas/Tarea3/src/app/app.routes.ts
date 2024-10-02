import { Routes } from '@angular/router';
import { HomeComponent } from './components/paths/home/home.component';
import { AboutComponent } from './components/paths/about/about.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { MoviesComponent } from './components/paths/movies/movies.component';
import { MoviesListComponent } from './components/paths/movies/movies-list/movies-list.component';
import { AddMovieComponent } from './components/paths/movies/add-movie/add-movie.component';
import { MovieDetailsComponent } from './components/paths/movies/movie-details/movie-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'movies', component: MoviesComponent, children: [
        {path: '', component: MoviesListComponent},
        {path: 'add', component: AddMovieComponent},
        {path: ':id', component: MovieDetailsComponent},
    ]},
    {path: '**', component: NotFoundComponent}
];
