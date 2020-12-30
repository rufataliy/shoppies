import { useState } from "react";
import { getNominatedMovieIds } from "../helpers/getNominatedMovieIds";
import { makeApiRequest } from "../helpers/makeApiRequest";
import { removeFromLocalStorage } from "../helpers/removeFromLocalStorage";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";
import { API_SEARCH, API_BYIDS } from "../constants";

const makeNominationMovieIdsString = () => {
  if (getNominatedMovieIds()) {
    return getNominatedMovieIds().join(",");
  } else {
    return "";
  }
};

export const useGlobalState = (): ContextDefault => {
  const [nominationList, setNominationList] = useState<Movie[] | null>(null);
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const [nominationLoading, setNominationLoading] = useState(false);
  const [movieLoading, setMovieLoading] = useState(false);

  const getNominationList = () => {
    if (Boolean(makeNominationMovieIdsString())) {
      makeApiRequest(
        `${API_BYIDS}${getNominatedMovieIds()}`,
        (data) => setNominationList(data),
        (status: boolean) => setNominationLoading(status)
      );
    } else {
      setNominationList(null);
    }
  };

  const resetMovieList = () => setMovieList(null);

  const addNomination = (id: string) => {
    if (nominationList?.length > 4) return;
    saveToLocalStorage(id);
    getNominationList();
  };

  const removeNomination = (id: string) => {
    removeFromLocalStorage(id);
    getNominationList();
  };

  const searchMovies = (params: SearchParams) => {
    if (!Boolean(params.s)) return;
    let queryString = "";
    for (let key in params) {
      if (Boolean(params[key])) {
        queryString += `${key}=${params[key]}&`;
      }
    }

    makeApiRequest(
      `${API_SEARCH}${queryString}`,
      (data) => setMovieList(data.Search),
      (status) => setMovieLoading(status)
    );
  };

  return {
    addNomination,
    removeNomination,
    nominationList,
    nominationLoading,
    searchMovies,
    movieList,
    movieLoading,
    getNominationList,
    resetMovieList,
  };
};
