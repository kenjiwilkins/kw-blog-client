import axios from "axios";

export const getOgp = async (url: string) => {
  const res = await axios.get(
    `http://localhost:443/api/ogp/${encodeURIComponent(url)}`
  );
  return res.data;
};
