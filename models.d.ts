type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

interface MovieDetails extends Movie {
  Realeased: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbID: "tt0094712";
  DVD: "N/A";
  BoxOffice: string;
  Production: string;
  Website: "N/A";
}

type ContextDefault = {
  addNomination: (id: string) => void;
  removeNomination: (id: string) => void;
  nominationList: Movie[] | null;
  nominationLoading: boolean;
  searchMovies: (params: SearchParams) => void;
  movieList: Movie[] | null;
  movieLoading: boolean;
  getNominationList: VoidFunction;
  resetMovieList: VoidFunction;
};

type SearchParams = { s: string; type?: string; year?: string };
