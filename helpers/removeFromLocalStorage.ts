import { NOMINATED_IDS } from "../constants";
import { getNominatedMovieIds } from "./getNominatedMovieIds";

export const removeFromLocalStorage = (id: string) => {
  try {
    const nominatedMovieIds: string[] | null = getNominatedMovieIds();

    if (nominatedMovieIds) {
      if (nominatedMovieIds.includes(id)) {
        const updatedNominatedMovieIds = nominatedMovieIds.filter(
          (nominatedMovieId) => nominatedMovieId !== id
        );
        window.localStorage.setItem(
          NOMINATED_IDS,
          updatedNominatedMovieIds.join(",")
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
};
