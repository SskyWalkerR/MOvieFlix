import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
// const IMG_URL = "https://image.tmdb.org/t/p/original/";
const KEY = process.env.REACT_APP_TMDB_KEY;

export const request = axios.create({
   baseURL: BASE_URL,
   headers: {
      "Content-Type": "Content-Type",
   },
   params: { api_key: KEY },
});
