import { useState } from "react";
import { getNominatedMovieIds } from "../helpers/getNominatedMovieIds";
import { makeApiRequest } from "../helpers/makeApiRequest";
import {API_BYIDS } from "../constants";

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

  return {
    nominationList,
    nominationLoading,
    movieList,
    movieLoading,
    getNominationList,
  };
};
