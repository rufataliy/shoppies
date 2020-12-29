import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeApiRequest } from "../helpers";
import { API_BYIDS } from "../constants";
import { Loader } from "./Loader";
import Button from "react-bootstrap/Button";

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

  const goBack = () => back();

  return (
    <>
      <div className={`sidebar ${isSelected ? "open" : ""} pb-5`}>
        <Loader loading={loading}>
          {selectedMovie && (
            <>
              <div className="details p-3">
                <div className="details-top d-sm-flex justify-content-between">
                  <div className="details-about w-100">
                    <h2>{selectedMovie.Title}</h2>
                    <h5 className="text-sm-right">{selectedMovie.Year}</h5>
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
                  <div className="details-img d-inline-block pl-sm-3 pb-3">
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
      {isSelected && (
        <Button onClick={goBack} variant="primary" className="close-btn p-2">
          <i className="bi bi-x mt-n2 d-block"></i>
        </Button>
      )}
      {isSelected ? (
        <div onClick={goBack} className="sidebar-backdrop" />
      ) : null}
    </>
  );
};
