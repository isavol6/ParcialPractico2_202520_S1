import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private baseListUrl = 'http://157.253.205.147:8080/api/movies';
  private baseDetailUrl = 'URL: http://157.253.205.147:8080/api/movies/'; //aca tocaria meterle el id

  constructor(private http: HttpClient){} 

  //metodo para leer peliculas
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseListUrl);
  }

  //metodo para el detail de una pelicula
  getRecetaById(id: number): Observable<Movie> {
    const url = `${this.baseDetailUrl}${id}`;
    return this.http.get<Movie>(url);
  }

  
    
  }
  
  

