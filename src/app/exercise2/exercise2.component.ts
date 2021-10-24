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
  yearList: any;
  selectedYear = '';

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  dropdownListNew: any;
  genreArr: any;
  filteredGenreArr: any;


  radioArr: any;
  movieData: any = [];
  movieTitle: any;
  radioFlag: boolean;

  constructor(private mainService: MainService) {
    this.movieListItems = [];
    this.genreList = [];
    this.tempList = [];
    this.radioArr = [];
    this.yearList = [];
    this.radioFlag = false;
    this.dropdownListNew = [];
    this.getMovieListItems();
    this.mainService._movieList.subscribe((res: any) => {
      this.movieListItems = res;
    });
  }

  ngOnInit() {
    this.movieListItems = [];
    this.tempList = [
      { id: 1, name: 'Sahil' },
      { id: 2, name: 'Mangesh' },
      { id: 3, name: 'Somnath' },
      { id: 4, name: 'Sutar' }
    ];

    this.dropdownList = [
      { id: 1, itemName: 'action' },
      { id: 2, itemName: 'adventure' },
      { id: 3, itemName: 'comedy' },
      { id: 4, itemName: 'sci-fi' },
      { id: 5, itemName: 'thriller' },
      { id: 6, itemName: 'fantasy' },
      { id: 7, itemName: 'western' },
      { id: 8, itemName: 'drama' },
      { id: 9, itemName: 'mystery' },
      { id: 10, itemName: 'crime' },
      { id: 12, itemName: 'horror' },
      { id: 12, itemName: 'animation' },
      { id: 13, itemName: 'war' },
      { id: 14, itemName: 'biography' }

    ];
    // this.selectedItems = [
    //   { id: 2, itemName: 'Singapore' },
    //   { id: 3, itemName: 'Australia' },
    //   { id: 4, itemName: 'Canada' },
    //   { id: 5, itemName: 'South Korea' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Generes',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: 'myclass custom-class select-dropdown'
    };
  }

  getMovieListItems() {
    this.genreArr = [];
    this.filteredGenreArr = [];

    this.mainService.getMovieListItems().subscribe((res: any) => {
      // this.movieListItems = res.media;
      this.movieData = res.media;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.movieData.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.movieData[i].genre.length; j++) {
          this.genreArr.push({
            itemName: this.movieData[i].genre[j]
            // id: i
          });
        }
      }
      this.filteredGenreArr = this.genreArr.reduce((filteredGenreArr, item) => {
        if (!filteredGenreArr.some(filteredItem => JSON.stringify(filteredItem) === JSON.stringify(item))) {
          filteredGenreArr.push(item);
        }
        return filteredGenreArr;
      }, []);

      this.yearList = this.movieData.map((item) => {
        // return empIds.indexOf(itm.empid) > -1;
        return item.year;
      });

      console.log('year', this.yearList);


      // this.dropdownListNew = this.movieData.filter((item) => {
      //   // return empIds.indexOf(itm.empid) > -1;
      //   if (item.genre.length > 0) {
      //     // console.log(item.genre);
      //     // this.genreArr.push({
      //     //   genre: item.genre
      //     // });

      //     // this.genreArr.push({ genre: item.genre });

      //     this.genreArr.Genre = item.genre;

      //     console.log('**', this.genreArr);
      //   }
      // });


      // console.log('@@', this.dropdownListNew);

      this.mainService.setMovieList(this.movieData);
    });

  }

  // RADIO BUTTONS
  onRadioChange(value) {
    console.log('Value is : ', value);
    if (value === '') {
      this.radioFlag = false;
    } else {
      this.radioFlag = true;
      this.movieListItems = this.movieData.filter((item) => {
        return item.type === value;
      });
      console.log(this.movieListItems);
      this.mainService.setMovieList(this.movieListItems);
    }
  }


  // SEARCH
  search() {
    if (this.movieTitle === '') {
      this.getMovieListItems();
    } else {
      this.movieListItems = this.movieData.filter((item) => {
        return item.title.toLocaleLowerCase().match(this.movieTitle.toLocaleLowerCase());
      });
      console.log('CURRENT ALL ->', this.movieListItems);
      // this.mainService.setMovieList(this.movieData);


      // // Radio btn search issue
      // if (this.radioFlag === true) {
      //   // ON FILTERD DATA (Movies/Books)
      //   this.movieListItems = this.movieListItems.filter((item) => {
      //     return item.title.toLocaleLowerCase().match(this.movieTitle.toLocaleLowerCase());
      //   });
      //   console.log('ON FILTERD DATA ->', this.movieListItems);
      // } else {
      //   // ON ALL DATA
      //   this.movieListItems = this.movieData.filter((item) => {
      //     return item.title.toLocaleLowerCase().match(this.movieTitle.toLocaleLowerCase());
      //   });
      //   console.log('CURRENT ALL ->', this.movieListItems);
      //   // this.mainService.setMovieList(this.movieData);
      // }

    }
  }


  // YEAR DROPDOWN
  selectChangeHandler(event: any) {
    this.selectedYear = event.target.value;
    console.log(this.selectedYear);
    if (this.selectedYear === '') {
    } else {
      this.movieListItems = this.movieData.filter((item) => {
        return item.year === this.selectedYear;
      });
      console.log(this.movieListItems);
      this.mainService.setMovieList(this.movieListItems);
    }
  }



  // DROPDOWN FUNCTIONS
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

}
