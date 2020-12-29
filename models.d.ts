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
  getNominationList: () => void;
};

type SearchParams = { s: string; type?: string; year?: string };

const a = {
  Title: "Bat*21",
  Year: "1988",
  Rated: "R",
  Released: "21 Oct 1988",
  Runtime: "105 min",
  Genre: "Drama, War",
  Director: "Peter Markle",
  Writer:
    "William C. Anderson (book), William C. Anderson (screenplay), George Gordon (screenplay)",
  Actors: "Gene Hackman, Danny Glover, Jerry Reed, David Marshall Grant",
  Plot:
    "During the Vietnam War, Colonel Hambleton's aircraft is shot down over enemy territory and a frantic rescue operation ensues.",
  Language: "English",
  Country: "USA",
  Awards: "1 nomination.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDRmNjYwZDktOTYxZi00MTdlLWI5ZjYtYWU4MDE5MDc5NGM3L2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "6.5/10" },
    { Source: "Rotten Tomatoes", Value: "81%" },
    { Source: "Metacritic", Value: "58/100" },
  ],
  Metascore: "58",
  imdbRating: "6.5",
  imdbVotes: "7,961",
  imdbID: "tt0094712",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "$3,966,256",
  Production: "TriStar Pictures",
  Website: "N/A",
  Response: "True",
};
