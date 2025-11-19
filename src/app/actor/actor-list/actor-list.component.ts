import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css',
})
export class ActorListComponent implements OnInit {
  @Input() actors: Actor[] = [];
  popularidadPromedio: number = 0;
  
  ngOnInit() {}

  //calcular la popularidad promedio de los actores
  calcularPopularidad():void{
    let totalPopularidad = 0;
    this.actors.forEach(actor => {
      totalPopularidad += actor.popularity;
    });
    this.popularidadPromedio = totalPopularidad / this.actors.length;
    
    
  }
}
