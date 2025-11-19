import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  ngOnInit(): void {}

  constructor(private moviseService: MovieService){}

  //metodo para traerme el detalle del servicio
  getMovieById(): void{
     this.moviseService.getRecetaById(this.movie.id).subscribe((movie) => {
      this.movie = movie;

      //punto 4: calcular duracion en horas y minutos
      const hours = Math.floor(this.movie.duration / 60);
      const minutes = this.movie.duration % 60;
      this.movie.durationHours = hours;
      this.movie.durationMinutes = minutes;
      
     });
  }
}
