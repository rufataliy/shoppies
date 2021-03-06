import React from "react";

const defaultContext: ContextDefault = {
  addNomination: () => {},
  removeNomination: () => {},
  nominationList: null,
  nominationLoading: false,
  movieList: null,
  movieLoading: false,
  searchMovies: ({}) => {},
  getNominationList: () => {},
  resetMovieList: () => {},
};

export const Context = React.createContext<ContextDefault>(defaultContext);
