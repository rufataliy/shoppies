import React from "react";
import Button from "react-bootstrap/Button";

interface Props {
  movie: Movie;
  removeNomination: (id: string) => void;
}

export const NominatedMovie: React.FC<Props> = ({
  movie,
  removeNomination,
}) => {
  return (
    <div className="mr-3 d-flex nomination">
      <Button variant="outline-primary">
        <strong>
          <span>{movie.Title}</span> <span>{movie.Year}</span>
        </strong>
      </Button>
      <Button
        className="pt-1 pb-1 pl-2 pr-2"
        onClick={() => removeNomination(movie.imdbID)}
      >
        <span aria-label="Close Account Info Modal Box">
          <i className="bi bi-x mt-n2 d-block"></i>
        </span>
      </Button>
    </div>
  );
};
