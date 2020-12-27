type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type ContextDefault = {
  addNomination: (id: string) => void;
  removeNomination: (id: string) => void;
  nominationList: Movie[] | null;
  nominationLoading: boolean;
  searchMovies: (params: SearchParams) => void;
  movieList: Movie[] | null;
  movieLoading: boolean;
  getNominationList: () => void;
};

type SearchParams = { s: string; type?: string; year?: string };
