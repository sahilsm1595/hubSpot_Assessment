import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  movieListUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) { }

  getMovieListItems() {
    return this.http.get(this.movieListUrl);
  }
}
