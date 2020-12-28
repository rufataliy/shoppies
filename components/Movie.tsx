import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/Link";
import { useRouter } from "next/router";

interface Props {
  movie: Movie;
  nominate: (id: string) => void;
  canNominate: boolean;
}

export const Movie: React.FC<Props> = ({ movie, nominate, canNominate }) => {
  const { asPath } = useRouter();

  return (
    <div className="d-flex flex-column align-items-center justify-content-between movie">
      <h5>{movie.Title}</h5>
      <img src={movie.Poster} alt="" />
      <p>{movie.Year}</p>
      <div className="btn-group w-100">
        <Button
          disabled={!canNominate}
          variant="outline-primary"
          block
          onClick={() => nominate(movie.imdbID)}
        >
          {canNominate ? <strong>nominate</strong> : "nominate"}
        </Button>
        <Link shallow href={`${asPath}&selectedId=${movie.imdbID}`}>
          <a className="ml-3 btn btn-outline-primary w-100">
            <strong>View</strong>
          </a>
        </Link>
      </div>
    </div>
  );
};
