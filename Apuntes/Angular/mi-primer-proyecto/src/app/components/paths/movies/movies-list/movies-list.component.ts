import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../../../services/movie.service';
import { Movie } from '../../../../types/movie';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MaterialModule, FormsModule,],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit{

  movies: Movie[] = [];
  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (response) => {this.movies = response},
      error: () => {}
    });
  }

  submit() {
    console.log('Enviar datos!')
  }

  cancelSubmit(e: MouseEvent){

  }
}
