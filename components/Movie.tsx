import React from "react";
import Button from "react-bootstrap/Button";

interface Props {
  movie: Movie;
  nominate: (id: string) => void;
}

export const Movie: React.FC<Props> = ({ movie, nominate }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between movie">
      <h5>{movie.Title}</h5>
      <img src={movie.Poster} alt="" />
      <p>{movie.Year}</p>
      <Button
        block
        variant="outline-primary"
        onClick={() => nominate(movie.imdbID)}
      >
        nominate
      </Button>
    </div>
  );
};
