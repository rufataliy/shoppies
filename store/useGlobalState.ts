import { useState } from "react";
export const useGlobalState = (): ContextDefault => {
  const [nominationList, setNominationList] = useState<Movie[] | null>(null);
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const [nominationLoading, setNominationLoading] = useState(false);
  const [movieLoading, setMovieLoading] = useState(false);

  return {
    nominationList,
    nominationLoading,
    movieList,
    movieLoading,
  };
};
