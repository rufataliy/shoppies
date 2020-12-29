import { NextApiHandler } from "next";
import { OMDB_BASE_URL } from "../../constants";

const handler: NextApiHandler = async (req, res) => {
  const { query } = req;
  const ids = (query.ids as string).split(",");

  const promises = ids.map(async (id) => {
    const movie = await fetch(OMDB_BASE_URL + "i=" + id)
      .then((res) => res.json())
      .then((data) => data);

    return movie;
  });
  const movies = await Promise.all(promises).then((movies) => movies);
  res.send(movies);
};

export default handler;
