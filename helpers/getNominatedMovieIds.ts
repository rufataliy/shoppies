import { NOMINATED_IDS } from "../constants";

export const getNominatedMovieIds = (): string[] | null => {
  try {
    const nominatedMovieIdsString = window.localStorage.getItem(NOMINATED_IDS);
    if (nominatedMovieIdsString) {
      const nominatedMovieIds: string[] = nominatedMovieIdsString.split(",");
      return nominatedMovieIds;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
