import { NOMINATED_IDS } from "../constants";
import { getNominatedMovieIds } from "./getNominatedMovieIds";

export const saveToLocalStorage = (id: string) => {
  try {
    const nominatedMovieIds: string[] | null = getNominatedMovieIds();

    if (nominatedMovieIds) {
      if (nominatedMovieIds.includes(id)) return;
      const updatedNominatedMovieIds = [...nominatedMovieIds, id];
      window.localStorage.setItem(
        NOMINATED_IDS,
        updatedNominatedMovieIds.join(",")
      );
    } else {
      window.localStorage.setItem(NOMINATED_IDS, id);
    }
  } catch (e) {
    console.log(e);
  }
};
