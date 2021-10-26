import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../Services/main.service';
import { Subscription } from 'rxjs';

interface IMovie {
  title: string;
  year: string;
  poster: string;
  genre: [string];
  type: string;
}

interface IYear {
  name: string;
  checked: boolean;
}

interface IGenre {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss'],
})
export class Exercise2Component implements OnInit, OnDestroy {
  movieSubscription$: Subscription;
  filteredMovieList: IMovie[];
  data: any = [];

  yearList: IYear[];
  genreArr: any;
  genreList: any;
  dropdownGenre: string;
  dropdownYear: string;

  movieTitle: string;
  radioValue: string;

  itemYears: any[];
  itemGenres: any[];

  constructor(private mainService: MainService) {
    this.getMovieListItems();
    this.mainService._movieList.subscribe((res: any) => {
      this.filteredMovieList = res;
    });
  }

  ngOnInit() {
    this.mainService._movieList.subscribe((res: any) => {
      this.filteredMovieList = res;
    });
    this.init();
  }
  init() {
    this.data = [];
    this.dropdownGenre = 'genre';
    this.dropdownYear = 'year';
    this.movieTitle = '';
    this.radioValue = '';
    this.itemYears = [];
    this.itemGenres = [];
    // this.globalFIlters = {};
    this.filteredMovieList = this.data;
    this.yearList = [];
    this.genreArr = [];
    this.genreList = [];
  }

  getMovieListItems() {
    this.movieSubscription$ = this.mainService.getMovieListItems().subscribe((res: any) => {
      this.data = res.media;
      // **** Dropdown GENRE data ****
      const filterData = new Set(this.data.map((a) => a.genre).flat());
      this.genreList = [...filterData].map((e) => {
        return {
          name: e,
          checked: false,
        };
      });
      // **** Dropdown YEAR data****
      this.yearList = this.data.map((item) => {
        return { name: item.year, checked: false };
      });
      // removed duplicate years
      this.yearList = this.yearList.filter(
        (item, index, self) => index === self.findIndex((t) => t.name === item.name)
      );
      this.yearList.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));

      this.setData(this.data);
    });
  }

  // Radio Buttons
  onTypeChange(value) {
    this.radioValue = value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredMovieList = this.data.filter(
      (item) =>
        (this.itemYears.length === 0 || this.itemYears.includes(item.year)) &&
        (this.radioValue === '' || item.type === this.radioValue) &&
        (this.itemGenres.length === 0 || item.genre.some((elem) => this.itemGenres.some((d) => d === elem)))
    );
    this.setData(this.filteredMovieList);
  }
  onSearch(): void {
    if (this.movieTitle) {
      if (this.radioValue) {
        this.filteredMovieList = this.filteredMovieList.filter((item) => {
          const result = item.title.toLocaleLowerCase().match(this.movieTitle.toLocaleLowerCase());
          return result;
        });
      } else {
        this.filteredMovieList = this.data.filter((item) => {
          const result = item.title.toLocaleLowerCase().match(this.movieTitle.toLocaleLowerCase());
          return result;
        });
      }
    } else {
      if (this.radioValue) {
        this.onTypeChange(this.radioValue);
      } else {
        this.getMovieListItems();
      }
    }
  }

  // Dropdown Checked GENRE list
  filterByGenre(itemGenres: any[]) {
    this.itemGenres = itemGenres;
    this.applyFilters();
  }
  filterByGenreIndividual(item: {}) {
    console.log(item);
  }

  // Dropdown Checked YEAR list
  filterByYear(itemYears: any[]) {
    this.itemYears = itemYears;
    this.applyFilters();
  }

  filterByYearIndividual(item: {}) {}

  setData(data): void {
    this.mainService.setMovieList(data);
  }

  ngOnDestroy() {
    if (this.movieSubscription$) {
      this.movieSubscription$.unsubscribe();
    }
  }
}
