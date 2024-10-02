import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface MovieDetailsParams {
  id: number,
}

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(p => {
      console.log('los parametros son: ', (p as MovieDetailsParams).id)
    })

  }

  ngOnInit(): void {
    
  }


}
