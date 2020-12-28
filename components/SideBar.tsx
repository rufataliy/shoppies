import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeApiRequest } from "../helpers";
import { API_BYIDS } from "../constants";
import { Loader } from "./Loader";

export const SideBar = () => {
  const { query, back } = useRouter();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const isSelected = query.selectedId ? true : false;

  useEffect(() => {
    if (isSelected) {
      makeApiRequest(
        `${API_BYIDS}${query.selectedId}`,
        (data: MovieDetails[]) => setSelectedMovie(data[0]),
        (status: boolean) => setLoading(status)
      );
    }
  }, [query]);

  return (
    <>
      <div className={`sidebar ${isSelected ? "open" : ""}`}>
        <Loader loading={loading}>
          {selectedMovie && (
            <>
              <div className="details p-3">
                <div className="details-top d-flex">
                  <div className="details-about">
                    <h2>{selectedMovie.Title}</h2>
                    <h5 className="text-secondary">{selectedMovie.Year}</h5>
                    <p>{selectedMovie.Plot}</p>
                    <p>
                      <strong>Genre:</strong> <p>{selectedMovie.Genre}</p>
                    </p>
                    <p>
                      <strong>Director:</strong> <p>{selectedMovie.Director}</p>
                    </p>
                    <p>
                      <strong>Country:</strong> <p>{selectedMovie.Country}</p>
                    </p>
                    <p>
                      <strong>Language:</strong> <p>{selectedMovie.Language}</p>
                    </p>
                  </div>
                  <div className="details-img">
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                    <div className="d-flex w-100 justify-content-between">
                      <p className="d-flex align-items-center">
                        <i className="bi bi-film mr-2 d-block mt-n1"></i>
                        {selectedMovie.Type}
                      </p>
                      <p className="d-flex align-items-center ">
                        <i className="bi bi-stopwatch mr-2 d-block mt-n1"></i>
                        {selectedMovie.Runtime}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="details-more">
                  <p>
                    <span>
                      <strong>Box Office: </strong>
                    </span>
                    {selectedMovie.BoxOffice}
                  </p>
                  <p>
                    <span>
                      <strong>Writer: </strong>
                    </span>
                    {selectedMovie.Writer}
                  </p>
                </div>
              </div>
            </>
          )}
        </Loader>
      </div>
      {isSelected ? (
        <div onClick={() => back()} className="sidebar-backdrop" />
      ) : null}
    </>
  );
};
