import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  // movieListUrl = '../../assets/data/data.json';
  movieListUrl = 'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json';

  private movieList = new Subject();
  _movieList = this.movieList.asObservable();

  constructor(private http: HttpClient) {}

  getMovieListItems() {
    return this.http.get(this.movieListUrl);
  }

  setMovieList(movieItems) {
    this.movieList.next(movieItems);
  }
}
