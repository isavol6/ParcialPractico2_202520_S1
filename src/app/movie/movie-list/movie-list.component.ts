import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { moviesData } from '../moviesData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService){ }

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  //traer las peliculas con el servicio punto 2
  getMovies():void{
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies
    });
  }
  
  ngOnInit() {
    this.getMovies();
  }
}
