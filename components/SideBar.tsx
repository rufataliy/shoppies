import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeApiRequest } from "../helpers";
import { API_BYIDS } from "../constants";

export const SideBar = () => {
  const { query, back } = useRouter();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const isSelected = query.selectedId ? true : false;

  useEffect(() => {
    if (isSelected) {
      makeApiRequest(`${API_BYIDS}${query.selectedId}`, (data) =>
        setSelectedMovie(data)
      );
    }
  });

  return (
    <>
      <div className={`sidebar ${isSelected ? "open" : ""}`}>
        {JSON.stringify(selectedMovie)}
      </div>
      {isSelected ? (
        <div onClick={() => back()} className="sidebar-backdrop" />
      ) : null}
    </>
  );
};
