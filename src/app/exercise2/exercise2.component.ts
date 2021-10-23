import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/main.service';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component implements OnInit {

  movieListItems: any;
  genreList: any;
  tempList: any;

  constructor(private mainService: MainService) {
    this.movieListItems = [];
    this.genreList = [];
    this.tempList = [];
    this.getMovieListItems();

  }

  ngOnInit() {
    this.movieListItems = [];
    this.tempList = [
      { id: 1, name: 'Sahil' },
      { id: 2, name: 'Mangesh' },
      { id: 3, name: 'Somnath' },
      { id: 4, name: 'Sutar' }
    ];
  }

  getMovieListItems() {
    this.mainService.getMovieListItems().subscribe((res) => {
      this.movieListItems = res['media'];
      // this.genreList.push(
      //   { genreType: res['media']['genre'] }
      // );
      console.log(this.movieListItems);

      // for(var i; this)
    });
  }

}
