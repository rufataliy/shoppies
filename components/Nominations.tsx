import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useStore } from "../store";
import { NominatedMovie } from "./NominatedMovie";

export const Nominations = () => {
  const { getNominationList, nominationList, removeNomination } = useStore();

  useEffect(() => {
    getNominationList();
  }, []);

  return (
    <Container>
      <div className="d-flex p-3 align-items-center nominations-container">
        <span>
          Nominations {nominationList ? nominationList.length : "0"}/5
        </span>
        <div className="ml-3 d-flex nominations pt-2 pb-2">
          {nominationList?.map((movie) => {
            return (
              <NominatedMovie
                movie={movie}
                removeNomination={() => removeNomination(movie.imdbID)}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
