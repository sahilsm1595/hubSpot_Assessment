export interface IMovie {
  title: string;
  year: string;
  poster: string;
  genre: [string];
  type: string;
}

export interface IYear {
  name: string;
  checked: boolean;
}

export interface IGenre {
  name: string;
  checked: boolean;
}
