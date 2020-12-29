import { NextApiHandler } from "next";
import { OMDB_BASE_URL } from "../../constants";

const handler: NextApiHandler = async (req, res) => {
  const { query } = req;
  const queryString = buildQueryString(query);
  const result = await fetch(OMDB_BASE_URL + queryString)
    .then((res) => res.json())
    .then((data) => data);

  res.send(result);
};

export default handler;

function buildQueryString(query: { [key: string]: string | string[] }): string {
  const searchParams = ["s", "y", "type", "t"];
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
