import { Injectable, OnInit } from '@angular/core';
import { Movie } from '../types/movie';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Movie[]> {
    const url = `${environment.apiUrl}photos`;
    return this.httpClient.get<Movie[]>(url);
  }

}
