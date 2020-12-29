import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  movie: Movie;
  nominate: (id: string) => void;
  canNominate: boolean;
}

export const Movie: React.FC<Props> = ({ movie, nominate, canNominate }) => {
  const { asPath } = useRouter();

  return (
    <div className="pb-2 d-flex flex-column align-items-center justify-content-between movie">
      <h5>{movie.Title}</h5>
      <div className="w-100 movie-img overflow-hidden">
        <img
          src={movie.Poster === "N/A" ? "/placeholder.svg" : movie.Poster}
          alt={movie.Title}
        />
      </div>
      <p>{movie.Year}</p>
      <div className="btn-group w-100">
        <Button
          disabled={!canNominate}
          variant="outline-primary"
          block
          onClick={() => nominate(movie.imdbID)}
        >
          {canNominate ? <strong>Nominate</strong> : "Nominated"}
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
