import { NextApiHandler } from "next";
import { OMDB_BASE_URL } from "../../constants";

const searchParams = ["s", "y", "type", "t"];

const handler: NextApiHandler = async (req, res) => {
  const { query } = req;
  const queryString = buildQueryString(query);
  fetch(OMDB_BASE_URL + queryString)
    .then((res) => res.json())
    .then((data) => res.send(data));
};

export default handler;

function buildQueryString(query: { [key: string]: string | string[] }): string {
  let queryString = "";
  for (let i = 0; i < searchParams.length; i++) {
    if (query[searchParams[i]]) {
      queryString += `${searchParams[i]}=${query[searchParams[i]]}${
        i === searchParams.length - 1 ? "" : "&"
      }`;
    }
  }
  return queryString;
}
