import { useState } from "react";
import { getNominatedMovieIds } from "../helpers/getNominatedMovieIds";
import { makeApiRequest } from "../helpers/makeApiRequest";
import { removeFromLocalStorage } from "../helpers/removeFromLocalStorage";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";

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

  const addNomination = (id: string) => {
    saveToLocalStorage(id);
    getNominationList();
  };

  const removeNomination = (id: string) => {
    removeFromLocalStorage(id);
    getNominationList();
  };

  
  return {
    addNomination,
    removeNomination,
    nominationList,
    nominationLoading,
    movieList,
    movieLoading,
    getNominationList,
  };
};
