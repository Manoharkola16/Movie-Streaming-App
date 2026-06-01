import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieTrailer = async (movieTitle) => {
  try {
    // Search movie
    const searchResponse = await axios.get(
      `${BASE_URL}/search/movie`,
      {
        params: {
          api_key: TMDB_API_KEY,
          query: movieTitle,
        },
      }
    );

    const movieId =
      searchResponse.data.results?.[0]?.id;

    if (!movieId) {
      return null;
    }

    // Get videos
    const videoResponse = await axios.get(
      `${BASE_URL}/movie/${movieId}/videos`,
      {
        params: {
          api_key: TMDB_API_KEY,
        },
      }
    );

    const videos =
      videoResponse.data.results || [];

    // Official Trailer
    let trailer = videos.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

    // Any YouTube video fallback
    if (!trailer) {
      trailer = videos.find(
        (video) =>
          video.site === "YouTube"
      );
    }

    return trailer?.key || null;

  } catch (error) {
    console.log(
      "TMDB Trailer Error:",
      error
    );

    return null;
  }
};