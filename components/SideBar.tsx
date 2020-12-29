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
  }, [query.selectedId]);

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
                    <h5 className="text-right">{selectedMovie.Year}</h5>
                    <p>
                      <strong>
                        <span className="text-highlight">Genre: </span>
                      </strong>{" "}
                      <span>{selectedMovie.Genre}</span>
                    </p>
                    <p>
                      <strong>
                        <span className="text-highlight">Director: </span>
                      </strong>{" "}
                      <span>{selectedMovie.Director}</span>
                    </p>
                    <p>
                      <strong>
                        <span className="text-highlight">Country: </span>
                      </strong>{" "}
                      <span>{selectedMovie.Country}</span>
                    </p>
                    <p>
                      <strong>
                        <span className="text-highlight">Language: </span>
                      </strong>{" "}
                      <span>{selectedMovie.Language}</span>
                    </p>
                    <p>
                      <span>
                        <strong>
                          <span className="text-highlight">Box Office: </span>
                        </strong>
                      </span>
                      {selectedMovie.BoxOffice}
                    </p>
                    <p>
                      <span>
                        <strong>
                          <span className="text-highlight">Writer: </span>
                        </strong>
                      </span>
                      {selectedMovie.Writer}
                    </p>
                  </div>
                  <div className="details-img pl-3 pb-3">
                    <img
                      src={
                        selectedMovie.Poster === "N/A"
                          ? "/placeholder.svg"
                          : selectedMovie.Poster
                      }
                      width={250}
                      alt={selectedMovie.Title}
                    />
                    <div className="d-flex mt-2 w-100 justify-content-between">
                      <p className="d-flex align-items-center">
                        <i className="bi bi-film mr-2 d-block mt-n1"></i>
                        {selectedMovie.Type}
                      </p>
                      <p className="d-flex align-items-center ">
                        {selectedMovie.Runtime !== "N/A" && (
                          <>
                            <i className="bi bi-stopwatch mr-2 d-block mt-n1"></i>
                            {selectedMovie.Runtime}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="details-more">
                  <p className="text-highlight">
                    <strong>Plot:</strong>
                  </p>
                  <p>{selectedMovie.Plot}</p>
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
